import { combineReducers } from 'redux';

import people from './people';
import general from './general';
import gameplay from './gameplay';

export default combineReducers({
  people,
  general,
  gameplay,
});
