import axios from 'axios';
const axiosApi = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const getAllGuitars = async () => {
  try {
    const response = await axiosApi.get(`/guitars`);

    return response;
  } catch (error) {
    throw new Error('Could not get the guitars');
  }
};

export const createAllGuitars = async ({ name, price }) => {
  try {
    const response = await axiosApi.post(`/guitars/add`, { name, price: parseFloat(price) });

    return response;
  } catch (error) {
    throw new Error('Error occured');
  }
};
