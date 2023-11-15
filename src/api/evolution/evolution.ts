import axios from 'axios';

export async function getNextEvolution(id: number) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/evolution-chain/${id}/`,
    headers: {},
  };

  try {
    const response = await axios.request(config);

    return response.data.chain.evolves_to[0]
      ? response.data.chain.evolves_to[0].species.name
      : null;
  } catch (error) {
    console.error(error);
  }
}
