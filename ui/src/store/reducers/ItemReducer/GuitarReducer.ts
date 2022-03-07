import { actionTypes } from 'constants/actionTypes';

import { AnyAction } from 'redux';

import { StateGuitars } from 'types/redux/Redux';

function initialState(): StateGuitars {
  return [];
}

const GuitarReducer = (
  state: StateGuitars = initialState(),
  action: AnyAction
) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GUITARS:
      return action.payload;
    case actionTypes.CREATE_GUITAR:
      return [...state, action.payload];
    case actionTypes.DELETE_GUITAR:
      return [
        ...state.filter(
          (guitar) => guitar._id !== action.payload.data.deleteGuitar._id
        ),
      ];
    case actionTypes.UPDATE_GUITAR:
      const arrayOfId = state.map((x) => x._id);
      const indexOfItemToUpdate = arrayOfId.indexOf(action.payload._id);
      const newState = {
        _id: action.payload._id,
        name: action.payload.name,
        price: action.payload.price,
      };

      state[indexOfItemToUpdate] = newState;
      return [...state];
    default:
      return state;
  }
};

export default GuitarReducer;
