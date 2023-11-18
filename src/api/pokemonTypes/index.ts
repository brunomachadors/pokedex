import axios from 'axios';
import { BASE_URL, PATH } from '../../utils/url';

export const getPokemonTypes = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: BASE_URL + PATH.pokemon.types,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonTypeByName = async (name: string) => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: BASE_URL + PATH.pokemon.types + '/' + name,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
