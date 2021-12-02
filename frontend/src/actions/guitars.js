import * as api from '../api/api';
import { actionTypes } from '../constants/actionTypes';

export const getAllGuitars = () => async dispatch => {
  try {
    const { data } = await api.getAllGuitars();
    dispatch({
      type: actionTypes.GET_ALL_GUITARS,
      payload: data.allGuitars,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAllGuitars = guitar => async dispatch => {
  try {
    const data = await api.createAllGuitars(guitar);
    console.log(data);
    dispatch({
      type: actionTypes.CREATE_ALL_GUITARS,
      payload: guitar,
    });
  } catch (error) {
    console.log(error.message);
  }
};
