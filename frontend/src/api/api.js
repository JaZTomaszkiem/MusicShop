import axios from 'axios';
const baseUrlApi = 'http://localhost:5000';

export const getAllGuitars = () => axios.get(`${baseUrlApi}/guitar/getGuitars`);
export const createAllGuitars = guitar => {
  return axios.post(`${baseUrlApi}/guitar/createGuitar`, guitar);
};
