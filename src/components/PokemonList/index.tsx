import { useDispatch, useSelector } from 'react-redux';
import {
  State,
  TpokemonList,
  TpokemonType,
  Tresult,
} from '../../types/pokemon';

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
} from '../../store/pokemon/pokemonList';
import { selectPokemon } from '../../store/pokemon/pokemon';

import { ButtonSelect } from '../Buttons/styles';
import themes from '../../utils/themes';
import { TypeColoredIcon } from '../Type/styles';
import PokeballLoading from '../Loading';
import {
  BlackScreenList,
  List,
  ListText,
  TextContainer,
} from '../Lists/styles';

import Pagination from '../Pagination';
import { PokemonListContainer } from './style';

export function PokemonList() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const dispatch = useDispatch();
  const firstGeneration = getRangeByGeneration(PokemonGeneration.First);
  const ninthGeneration = getRangeByGeneration(PokemonGeneration.Ninth);
  const itemsPerPage = 150;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response: TpokemonList = await getPokemonList(
          firstGeneration.start,
          ninthGeneration.end
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
  }, [dispatch, firstGeneration.start, ninthGeneration.end]);

  const handleClick = (pokemon: Tresult) => {
    dispatch(selectPokemon(pokemon));
  };

  function getColoredIcon(type: string): string {
    const sourceImage = 'types/' + type.toLowerCase() + '.svg';
    return sourceImage;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonLists.filteredList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(pokemonLists.filteredList.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <BlackScreenList>
      {isLoading ? (
        <PokeballLoading></PokeballLoading>
      ) : (
        <PokemonListContainer>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <List aria-label="pokemon list">
            {currentItems.map((pokemon) => (
              <ButtonSelect
                key={pokemon.name}
                color={
                  themes.colors.type[
                    pokemon.types?.[0] as keyof typeof themes.colors.type
                  ]
                }
                aria-label={'Select the pokemon ' + pokemon.name}
                onClick={() => handleClick(pokemon)}
              >
                <ListText data-cy={pokemon.name}>
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
        </PokemonListContainer>
      )}
    </BlackScreenList>
  );
}

export default PokemonList;
