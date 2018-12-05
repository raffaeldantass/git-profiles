import { createStore, combineReducers } from 'redux';
import fetchUserReducer from './reducers/FetchUser';
import fetchReposReducer from './reducers/FetchRepos';

const rootReducer = combineReducers({ fetchUserReducer, fetchReposReducer });

const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;