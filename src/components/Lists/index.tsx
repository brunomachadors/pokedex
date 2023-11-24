import { useDispatch, useSelector } from 'react-redux';
import {
  State,
  TpokemonList,
  TpokemonType,
  Tresult,
} from '../../types/pokemon';
import {
  BlackScreenList,
  List,
  ListText,
  ListsContainer,
  TextContainer,
} from './styles';
import { useEffect, useState } from 'react';
import {
  PokemonGeneration,
  getRangeByGeneration,
} from '../../utils/generation';
import {
  getPokemonDataByName,
  getPokemonList,
} from '../../api/pokemon/pokemons';
import {
  updateFilteredList,
  updateOriginalList,
} from '../../store/pokemonList/pokemonList';
import { selectPokemon } from '../../store/pokemon/pokemon';

import { ButtonSelect } from '../Buttons/styles';
import themes from '../../utils/themes';
import { getPokemonTypeByName, getPokemonTypes } from '../../api/pokemonTypes';
import { IPokemonType } from '../../types/pokemonTypes';
import {
  updateFilteredTypeList,
  updateOriginalTypeList,
} from '../../store/pokemonTypes/pokemonTypeList';
import { TypeColoredIcon } from '../Type/styles';
import { selectType } from '../../store/type/pokemonType';
import PokeballLoading from '../Loading';
import { getItem, getItems } from '../../api/item/item';
import { IItem } from '../../types/item/item';
import { StyledItemImage } from '../Photo/styles';
import {
  updateFilteredItemList,
  updateOriginalItemList,
} from '../../store/itemList/itemList';
import { selectItem } from '../../store/item/item';

function Lists() {
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <ListsContainer>
      {selectedMenu === 'POKEMON' && <PokemonList></PokemonList>}
      {selectedMenu === 'TYPES' && <TypeList></TypeList>}
      {selectedMenu === 'ITEMS' && <ItemList></ItemList>}
    </ListsContainer>
  );
}

export function PokemonList() {
  const [isLoading, setIsLoading] = useState(true);
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const dispatch = useDispatch();
  const firstGeneration = getRangeByGeneration(PokemonGeneration.First);
  const secondGeneration = getRangeByGeneration(PokemonGeneration.Second);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response: TpokemonList = await getPokemonList(
          firstGeneration.start,
          secondGeneration.end
        );

        const updatedList = await Promise.all(
          response.results.map(async (pokemon) => {
            const dataResponse = await getPokemonDataByName(pokemon.name);

            const updatedPokemon = {
              ...pokemon,
              id: dataResponse.id,
              image:
                dataResponse.sprites.other['official-artwork'].front_default,
              types: dataResponse.types.map(
                (type: TpokemonType) => type.type.name
              ),
            };

            return updatedPokemon;
          })
        );

        dispatch(updateOriginalList(updatedList));
        dispatch(updateFilteredList(updatedList));
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [dispatch, firstGeneration.start, secondGeneration.end]);

  const handleClick = (pokemon: Tresult) => {
    dispatch(selectPokemon(pokemon));
  };

  function getColoredIcon(type: string): string {
    const sourceImage = 'types/' + type.toLowerCase() + '.svg';
    return sourceImage;
  }

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading></PokeballLoading>
      ) : (
        <List>
          {pokemonLists.filteredList.map((pokemon) => (
            <ButtonSelect
              key={pokemon.name}
              color={
                themes.colors.type[
                  pokemon.types?.[0] as keyof typeof themes.colors.type
                ]
              }
              onClick={() => handleClick(pokemon)}
            >
              <ListText>
                <TextContainer>#{pokemon.id}</TextContainer>
                <TextContainer>{pokemon.name.toUpperCase()}</TextContainer>
                <TextContainer>
                  {pokemon.types?.map((type) => (
                    <TypeColoredIcon
                      key={type}
                      src={getColoredIcon(type)}
                      alt={type}
                    ></TypeColoredIcon>
                  ))}
                </TextContainer>
              </ListText>
            </ButtonSelect>
          ))}
        </List>
      )}
    </BlackScreenList>
  );
}

export function TypeList() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const filteredList = useSelector(
    (state: State) => state.typeList.lists.filteredList
  );

  useEffect(() => {
    async function fetchPokemonTypes() {
      setIsLoading(true);
      const pokemonTypes = await getPokemonTypes();

      const typeList = await Promise.all(
        pokemonTypes.map(async (type: { name: string }) => {
          const typeInfo: IPokemonType = await getPokemonTypeByName(type.name);

          const updatedTypeList = {
            typeInfo,
          };

          return updatedTypeList;
        })
      );

      dispatch(updateOriginalTypeList(typeList));
      dispatch(updateFilteredTypeList(typeList));

      setIsLoading(false);
    }

    fetchPokemonTypes();
  }, [dispatch]);

  function getColoredIcon(type: string): string {
    const sourceImage = 'types/' + type.toLowerCase() + '.svg';
    return sourceImage;
  }

  const handleClick = (type: string) => {
    dispatch(selectType(type));
  };

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading></PokeballLoading>
      ) : (
        <List>
          {filteredList.map((type) => (
            <ButtonSelect
              key={type.typeInfo.name}
              color={
                themes.colors.type[
                  type.typeInfo.name as keyof typeof themes.colors.type
                ]
              }
              onClick={() => handleClick(type.typeInfo.name)}
            >
              <ListText>
                <TextContainer>#{type.typeInfo.id}</TextContainer>
                <TextContainer>
                  {type.typeInfo.name.toUpperCase()}
                </TextContainer>

                <TextContainer>
                  <TypeColoredIcon
                    src={getColoredIcon(type.typeInfo.name)}
                    alt={type.typeInfo.name}
                  ></TypeColoredIcon>
                </TextContainer>
              </ListText>
            </ButtonSelect>
          ))}
        </List>
      )}
    </BlackScreenList>
  );
}

export function ItemList() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const filteredItemList = useSelector(
    (state: State) => state.itemList.lists.filteredList
  );

  useEffect(() => {
    async function getAllItems() {
      try {
        const items = await getItems();

        const infos = await Promise.all(
          items.map(async (item: { url: string }) => {
            const info: IItem = await getItem(item.url);
            return info;
          })
        );

        dispatch(updateOriginalItemList(infos));
        dispatch(updateFilteredItemList(infos));

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setIsLoading(false);
      }
    }

    getAllItems();
  }, [dispatch]);

  const handleClick = (item: IItem) => {
    dispatch(selectItem(item));
  };

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading></PokeballLoading>
      ) : (
        <List>
          {filteredItemList.map((item) => (
            <ButtonSelect
              key={item.id}
              color={themes.colors.buttonColor.dark}
              onClick={() => handleClick(item)}
            >
              <ListText>
                <TextContainer>#{item.id}</TextContainer>
                <TextContainer>{item.name.toUpperCase()}</TextContainer>
                <StyledItemImage src={item.sprites?.default}></StyledItemImage>
              </ListText>
            </ButtonSelect>
          ))}
        </List>
      )}
    </BlackScreenList>
  );
}

export default Lists;
