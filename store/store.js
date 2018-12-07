import { createStore, combineReducers } from 'redux';
import fetchUserReducer from './reducers/FetchUser';
import fetchRepositoriesReducer from './reducers/FetchRepos';

const rootReducer = combineReducers({ fetchUserReducer, fetchRepositoriesReducer });

const store = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;