import { useEffect, useState } from 'react';
import {
  PokedexContainer,
  PokedexLeftSide,
  PokedexRightSide,
  PokedexLeftContent,
  PokedexRightContent,
} from './styles';
import { getPokemonList } from '../../api/pokemon/pokemons';
import { TpokemonList, Tresult } from '../../types/pokemon';

export function Pokedex() {
  const [pokemonList, setPokemonList] = useState<Tresult[]>([]);

  useEffect(() => {
    async function getList() {
      try {
        const response: TpokemonList = await getPokemonList(0, 9);
        console.log(response);
        setPokemonList(response.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    }

    getList();
  }, []);

  return (
    <PokedexContainer>
      <PokedexLeftSide>
        <PokedexLeftContent></PokedexLeftContent>
      </PokedexLeftSide>

      <PokedexRightSide>
        <PokedexRightContent>
          {pokemonList.map((pokemon) => (
            <div key={pokemon.name}>{pokemon.name}</div>
          ))}
        </PokedexRightContent>
      </PokedexRightSide>
    </PokedexContainer>
  );
}
