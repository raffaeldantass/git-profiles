import store from '../store';

export function fetchSearch(user) {
  return fetch(`https://api.github.com/users/${user}`)
          .then(handleError)
          .then(resp => resp.json())
          .then(json => {
            store.dispatch({ type: 'FETCH_USER', payload: json })
          })
}

function handleError(resp) {
  if(!resp.ok) {
    throw Err(resp.statusText);
  }
  return resp;
}