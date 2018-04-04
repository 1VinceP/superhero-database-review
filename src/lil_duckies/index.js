import { combineReducers } from 'redux';

import marvelReducer from './marvelReducer';
import reducer from './reducer';

export default combineReducers({
    marvel: marvelReducer,
    dc: reducer
})