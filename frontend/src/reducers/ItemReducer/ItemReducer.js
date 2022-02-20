import { actionTypes } from '../../constants/actionTypes';

const ItemReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GUITARS:
      return action.payload;
    case actionTypes.CREATE_ALL_GUITARS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default ItemReducer;
