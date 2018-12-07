import store from '../store';
import { handleError } from '../../src/helpers/handleError';

export function searchRepos(user) {
  return fetch(`https://api.github.com/users/${user}/repos`)
          .then(handleError)
          .then(resp => resp.json())
          .then(json => store.dispatch({ type: 'FETCH_REPOS', payload: json }) );
};
