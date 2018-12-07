import store from '../store';

export function clearSearch() {
  const searchInput = document.getElementById('search_input');
  searchInput.value = "";
  searchInput.focus();
  store.dispatch({type: 'CLEAR_FETCH'});
};