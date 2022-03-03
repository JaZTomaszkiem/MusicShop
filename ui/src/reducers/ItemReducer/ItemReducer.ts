import { actionTypes } from '../../constants/actionTypes';

const ItemReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GUITARS:
      console.log(action.payload);
      return action.payload;
    case actionTypes.CREATE_GUITAR:
      return [...state, action.payload];
    case actionTypes.DELETE_GUITAR:
      console.log(action.payload);
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

export default ItemReducer;
