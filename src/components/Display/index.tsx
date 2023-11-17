import { useEffect } from 'react';
import {
  AnimatedText,
  BlackScreen,
  BlackScreenList,
  List,
  ListText,
  WhiteScreen,
  Word,
} from './styles';
import {
  getPokemonDataByName,
  getPokemonList,
} from '../../api/pokemon/pokemons';
import {
  State,
  TpokemonList,
  TpokemonType,
  Tresult,
} from '../../types/pokemon';
import themes from '../../utils/themes';
import { useDispatch, useSelector } from 'react-redux';
import { selectPokemon } from '../../store/pokemon/pokemon';
import { ButtonSelect } from '../Buttons/styles';
import Photo from '../Photo';
import { Info } from '../Info';
import {
  PokemonGeneration,
  getRangeByGeneration,
} from '../../utils/generation';
import {
  updateFilteredList,
  updateOriginalList,
} from '../../store/pokemonList/pokemonList';

export function Display() {
  return (
    <BlackScreen>
      <AnimatedText>
        <Word>POKEDEX</Word>
      </AnimatedText>
    </BlackScreen>
  );
}

export function DisplayList() {
  const pokemonLists = useSelector((state: State) => state.pokemonList.lists);
  const dispatch = useDispatch();
  const firstGeneration = getRangeByGeneration(PokemonGeneration.First);
  const secondGeneration = getRangeByGeneration(PokemonGeneration.Second);

  useEffect(() => {
    async function fetchData() {
      try {
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
      }
    }

    fetchData();
  }, [dispatch, firstGeneration.start, firstGeneration.end]);

  const handleClick = (pokemon: Tresult) => {
    dispatch(selectPokemon(pokemon));
  };

  return (
    <BlackScreenList>
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
    </BlackScreenList>
  );
}

export function DisplayMonitor() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  const mainMenu = useSelector(
    (state: State) => state.mainMenu.selectedMainMenu
  );

  return (
    <WhiteScreen>
      {mainMenu === 'POKEMON' &&
        ((infoMenu === 'photo' && <Photo></Photo>) ||
          (infoMenu === 'info' && <Info></Info>))}
    </WhiteScreen>
  );
}

export default Display;
