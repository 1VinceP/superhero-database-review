import { createStore } from 'redux';
import reducers from './lil_duckies/index';

export default createStore( reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );