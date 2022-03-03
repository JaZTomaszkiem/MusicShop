import axios from 'axios';
const axiosApi = axios.create({
  baseURL: `${process.env.BASE_URL}`,
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
    const response = await axiosApi.post(`/guitars`, { name, price });

    return response;
  } catch (error) {
    throw new Error('Error occured');
  }
};

export const deleteGuitar = async (id) => {
  try {
    const response = await axiosApi.delete(`/guitar`, {
      data: id,
    });

    return response;
  } catch (error) {
    throw new Error('Error occured');
  }
};

export const updateGuitar = async (id, name, price) => {
  try {
    const response = await axiosApi.patch(`/guitar`, { id, name, price });

    return response;
  } catch (error) {
    throw new Error('Error occured');
  }
};
