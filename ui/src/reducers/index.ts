import { combineReducers } from 'redux';
import GuitarReducer from './ItemReducer/GuitarReducer';

export default combineReducers({
  guitars: GuitarReducer,
});
