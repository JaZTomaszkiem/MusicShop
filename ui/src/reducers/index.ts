import { combineReducers } from 'redux';
import ItemReducer from './ItemReducer/ItemReducer';

import tasks from './tasks';

export default combineReducers({
  ItemReducer,
  tasks,
});
