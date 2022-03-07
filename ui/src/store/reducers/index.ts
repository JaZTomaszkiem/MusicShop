import { combineReducers } from 'redux';
import GuitarReducer from 'store/reducers/ItemReducer/GuitarReducer';

export default combineReducers({
  guitars: GuitarReducer,
});
