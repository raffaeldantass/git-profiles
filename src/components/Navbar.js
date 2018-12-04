import React from 'react';
import { fetchSearch } from '../../store/actions/FetchSearch';
import { searchRepos } from '../../store/actions/FetchRepos';

const Navbar = ({className}) => {
  const _search = () => {
    const searchInput = document.getElementById('search_input');
    fetchSearch(searchInput.value);
    searchRepos(searchInput.value);
  }

  return (
    <nav className={ className }>
      <input id="search_input" type="text" className="navbar-input"/>
      <button onClick = { _search }> Pesquisar </button>
    </nav>
  )
}

export default Navbar;