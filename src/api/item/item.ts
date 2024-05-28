import axios from 'axios';

export async function getItems() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://pokeapi.co/api/v2/item/?offset=0&limit=1300',
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getItem(url: string) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url,
    headers: {},
  };

  try {
    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
