import { useEffect, useState } from 'react';
import {
  AnimatedText,
  BlackScreen,
  BlackScreenList,
  List,
  ListText,
  WhiteScreen,
  Word,
  TextInfo,
  BlackScreenInfo,
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
  const [pokemonList, setPokemonList] = useState<Tresult[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response: TpokemonList = await getPokemonList(0, 251);
        setPokemonList(response.results);

        const updatedList = await Promise.all(
          response.results.map(async (pokemon) => {
            const dataResponse = await getPokemonDataByName(pokemon.name);

            return {
              ...pokemon,
              id: dataResponse.id,
              image:
                dataResponse.sprites.other['official-artwork'].front_default,
              types: dataResponse.types.map(
                (type: TpokemonType) => type.type.name
              ),
            };
          })
        );

        setPokemonList(updatedList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleClick = (pokemon: Tresult) => {
    dispatch(selectPokemon(pokemon));
  };

  return (
    <BlackScreenList>
      <List>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemonList.map((pokemon) => (
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
          ))
        )}
      </List>
    </BlackScreenList>
  );
}

export function DisplayMonitor() {
  const infoMenu = useSelector((state: State) => state.infoMenu.selectedMenu);
  return (
    <WhiteScreen>
      {infoMenu !== 'info' && <Photo></Photo>}
      {infoMenu !== 'photo' && <Info></Info>}
    </WhiteScreen>
  );
}

export function DisplayInfo() {
  const currentPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );
  return (
    <BlackScreenInfo>
      <TextInfo>{currentPokemon.name.toLocaleUpperCase()}</TextInfo>
    </BlackScreenInfo>
  );
}

export default Display;
