import store from '../store';
import { handleError } from '../../src/helpers/handleError';

export function fetchSearch(user) {
  return fetch(`https://api.github.com/users/${user}`)
          .then(handleError)
          .then(resp => resp.json())
          .then(json =>  store.dispatch({ type: 'FETCH_USER', payload: json }) );
};
