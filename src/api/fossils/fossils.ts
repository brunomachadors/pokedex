import axios from 'axios';

export async function getFossils() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://pokeapi.co/api/v2/item-category/35/',
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}
