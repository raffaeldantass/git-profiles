import { createStore, combineReducers } from 'redux';
import fetchUserReducer from './reducers/fetch_user';
import fetchReposReducer from './reducers/fetch_repos';

const rootReducer = combineReducers({ fetchUserReducer, fetchReposReducer });

const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;