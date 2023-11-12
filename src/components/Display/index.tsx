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

function Display() {
  return (
    <BlackScreen>
      <AnimatedText>
        <Word>POKEDEX</Word>
      </AnimatedText>
    </BlackScreen>
  );
}

import { useEffect, useState } from 'react';
import { getPokemonList } from '../../api/pokemon/pokemons';
import { TpokemonList, Tresult } from '../../types/pokemon';

export function DisplayList() {
  const [pokemonList, setPokemonList] = useState<Tresult[]>([]);

  useEffect(() => {
    async function getList() {
      try {
        const response: TpokemonList = await getPokemonList(0, 151);
        console.log(response);
        setPokemonList(response.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    }

    getList();
  }, []);
  return (
    <BlackScreenList>
      <List>
        {pokemonList.map((pokemon) => (
          <Button>
            <ListText key={pokemon.name}>{pokemon.name}</ListText>
          </Button>
        ))}
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
