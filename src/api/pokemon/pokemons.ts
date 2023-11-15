import axios from 'axios';
import { BASE_URL, PATH } from '../../utils/url';

export const getPokemonList = async (
  start: number = 1,
  total: number = 151
) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${PATH.pokemon.pokemon}?offset=${
      start - 1
    }&limit=${total}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonDataByName = async (pokemonName: string) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${PATH.pokemon.pokemon}/${pokemonName}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
