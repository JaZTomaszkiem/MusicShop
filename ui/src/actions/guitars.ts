import * as api from '../api/api';
import { actionTypes } from '../constants/actionTypes';

export const getAllGuitars = () => async (dispatch) => {
  try {
    const { data } = await api.getAllGuitars();
    dispatch({
      type: actionTypes.GET_ALL_GUITARS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAllGuitars = (guitar) => async (dispatch) => {
  try {
    const { data } = await api.createAllGuitars(guitar);
    dispatch({
      type: actionTypes.CREATE_GUITAR,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteGuitar = (guitarId) => async (dispatch) => {
  try {
    const data = await api.deleteGuitar(guitarId);
    // console.log(data);
    dispatch({
      type: actionTypes.DELETE_GUITAR,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateGuitar = (guitarId, name, price) => async (dispatch) => {
  try {
    const { data } = await api.updateGuitar(guitarId, name, price);
    dispatch({
      type: actionTypes.UPDATE_GUITAR,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
