import { useEffect, useState } from 'react';
import {
  AnimatedText,
  BlackScreen,
  BlackScreenList,
  Button,
  List,
  ListText,
  WhiteScreen,
  Word,
  Screen,
} from './styles';
import {
  getPokemonDataByName,
  getPokemonList,
} from '../../api/pokemon/pokemons';
import { TpokemonList, TpokemonType, Tresult } from '../../types/pokemon';
import themes from '../../utils/themes';

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response: TpokemonList = await getPokemonList(0, 151);
        setPokemonList(response.results);

        const updatedList = await Promise.all(
          response.results.map(async (pokemon) => {
            const dataResponse = await getPokemonDataByName(pokemon.name);

            return {
              ...pokemon,
              gameIndex: dataResponse.game_indices[10].game_index,
              types: dataResponse.types.map(
                (type: TpokemonType) => type.type.name
              ),
            };
          })
        );

        setPokemonList(updatedList);
        setLoading(false);
        console.log(pokemonList);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <BlackScreenList>
      <List>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemonList.map((pokemon) => (
            <Button
              key={pokemon.name}
              color={
                themes.colors.type[
                  pokemon.types?.[0] as keyof typeof themes.colors.type
                ] || '#09090d'
              }
            >
              <ListText>
                #{pokemon.gameIndex} {pokemon.name.toUpperCase()} -{' '}
                {pokemon.types && pokemon.types[0]?.toUpperCase()}
              </ListText>
            </Button>
          ))
        )}
      </List>
    </BlackScreenList>
  );
}

export function DisplayMonitor() {
  return (
    <WhiteScreen>
      <Screen></Screen>
    </WhiteScreen>
  );
}

export default Display;
