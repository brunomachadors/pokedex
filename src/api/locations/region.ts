import axios from 'axios';
import { BASE_URL, PATH } from '../../utils/url';

export const getAllRegions = async () => {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BASE_URL}${PATH.locations.region}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getRegionByName = async (url: string) => {
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
};
