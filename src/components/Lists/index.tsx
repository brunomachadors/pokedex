import { useDispatch, useSelector } from 'react-redux';
import {
  State,
  TpokemonList,
  TpokemonType,
  Tresult,
} from '../../types/pokemon';
import { BlackScreenList, List, ListText, ListsContainer } from './styles';
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
import { PikachuLoading } from '../Loading';
import { ButtonSelect } from '../Buttons/styles';
import themes from '../../utils/themes';

function Lists() {
  const selectedMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <ListsContainer>
      {selectedMenu === 'POKEMON' && <PokemonList></PokemonList>}
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

  return (
    <BlackScreenList>
      {isLoading ? (
        <PikachuLoading></PikachuLoading>
      ) : (
        <List>
          {pokemonLists.filteredList.map((pokemon) => (
            <ButtonSelect
              key={pokemon.name}
              color={
                themes.colors.type[
                  pokemon.types?.[0] as keyof typeof themes.colors.type
                ] || '#09090d'
              }
              onClick={() => handleClick(pokemon)}
            >
              <ListText>
                #{pokemon.id} {pokemon.name.toUpperCase()}
              </ListText>
            </ButtonSelect>
          ))}
        </List>
      )}
    </BlackScreenList>
  );
}

export default Lists;
