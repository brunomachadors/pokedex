// api/pokemon/pokemons.js
import axios from 'axios';
import { BASE_URL, PATH } from '../../utils/url';

export const getPokemonList = async (
  start: number = 0,
  total: number = 151
) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${PATH.pokemon.pokemon}?offset=${start}&limit=${total}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
