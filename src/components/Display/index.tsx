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
  StyledImage,
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
        const response: TpokemonList = await getPokemonList(0, 151);
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
            <Button
              key={pokemon.name}
              color={
                themes.colors.type[
                  pokemon.types?.[0] as keyof typeof themes.colors.type
                ] || '#09090d'
              }
              onClick={() => handleClick(pokemon)}
            >
              <ListText>
                #{pokemon.id} {pokemon.name.toUpperCase()} -{' '}
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
  const currentPokemon = useSelector(
    (state: State) => state.pokemon.selectedPokemon
  );

  const backgroundColor =
    themes.colors.background[
      currentPokemon.types?.[0] as keyof typeof themes.colors.type
    ] || '#09090d';

  return (
    <WhiteScreen>
      <Screen color={backgroundColor}>
        <StyledImage src={currentPokemon.image} alt="selectedPokemon" />
      </Screen>
    </WhiteScreen>
  );
}

export default Display;
