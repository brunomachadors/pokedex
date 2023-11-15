import axios from 'axios';

export async function getSpecie(name: string) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon-species/${name}/`,
    headers: {},
  };

  try {
    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
