import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../types/pokemon';
import {
  BlackScreenList,
  List,
  ListText,
  ListsContainer,
  MapIcon,
  TextContainer,
} from './styles';
import { useEffect, useState } from 'react';

import { ButtonSelect } from '../Buttons/styles';
import themes from '../../utils/themes';
import { getPokemonTypeByName, getPokemonTypes } from '../../api/pokemonTypes';
import { IPokemonType } from '../../types/pokemonTypes';
import {
  updateFilteredTypeList,
  updateOriginalTypeList,
} from '../../store/type/pokemonTypeList';
import { TypeColoredIcon } from '../Type/styles';
import { selectType } from '../../store/type/pokemonType';
import PokeballLoading from '../Loading';
import { getItem } from '../../api/item/item';
import { IItem } from '../../types/item/item';
import { StyledItemImage } from '../Photo/styles';
import {
  updateFilteredItemList,
  updateOriginalItemList,
} from '../../store/item/itemList';
import { selectItem } from '../../store/item/item';
import { getAllRegions } from '../../api/locations/region';
import {
  filteredRegionList,
  originalRegionList,
  selectRegion,
} from '../../store/region/region';
import { IRegion } from '../../types/location';
import { getFossils } from '../../api/fossils/fossils';
import PokemonList from '../PokemonList';
import ItemList from '../ItemList';

function Lists() {
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <ListsContainer>
      {selectedMenu === 'POKÉMON' && <PokemonList />}
      {selectedMenu === 'TYPES' && <TypeList />}
      {selectedMenu === 'ITEMS' && <ItemList />}
      {selectedMenu === 'REGIONS' && <RegionList />}
      {selectedMenu === 'FOSSILS' && <FossilList />}
    </ListsContainer>
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
        <List aria-label="Type list">
          {filteredList.map((type) => (
            <ButtonSelect
              key={type.typeInfo.name}
              color={
                themes.colors.type[
                  type.typeInfo.name as keyof typeof themes.colors.type
                ]
              }
              aria-label={'Select the type ' + type.typeInfo.name}
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

export function RegionList() {
  const [isLoading, setIsLoading] = useState(true);
  const regions = useSelector(
    (state: State) => state.regions.lists.filteredList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getRegions() {
      const allRegions = await getAllRegions();

      const regionsUpdated = await Promise.all(
        allRegions.map(async (region: { url: string }) => {
          const info: IItem = await getItem(region.url);
          return info;
        })
      );

      dispatch(originalRegionList(regionsUpdated));
      dispatch(filteredRegionList(regionsUpdated));

      setIsLoading(false);
    }

    getRegions();
  }, [dispatch]);

  const handleClick = (region: IRegion) => {
    dispatch(selectRegion(region));
  };

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading></PokeballLoading>
      ) : (
        <List aria-label="Region list">
          {regions.map((region) => (
            <ButtonSelect
              key={region.name}
              color={
                themes.colors.regionColorMap[
                  region.name as keyof typeof themes.colors.regionColorMap
                ]
              }
              aria-label={'Select the region ' + region.name}
              onClick={() => handleClick(region)}
            >
              <ListText>
                <TextContainer>#{region.id}</TextContainer>
                <TextContainer>{region.name.toUpperCase()}</TextContainer>
                <MapIcon src="icons/map.png" />
              </ListText>
            </ButtonSelect>
          ))}
        </List>
      )}
    </BlackScreenList>
  );
}

export function FossilList() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const filteredItemList = useSelector(
    (state: State) => state.itemList.lists.filteredList
  );

  useEffect(() => {
    async function getAllItems() {
      try {
        const items = await getFossils();

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
        <List aria-label="Fossil list">
          {filteredItemList.map((item) => (
            <ButtonSelect
              key={item.id}
              color={
                themes.colors.itemTypeColorMap[
                  item.category
                    ?.name as keyof typeof themes.colors.itemTypeColorMap
                ]
              }
              aria-label={'Select the fossil' + item.name}
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
