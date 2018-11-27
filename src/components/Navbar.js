import React from 'react';
import store from '../../store/store';
import { fetchSearch } from '../../store/actions/FetchSearch';

const Navbar = ({className}) => {
  const _search = () => {
    const searchInput = document.getElementById('search_input');
    fetchSearch(searchInput.value);
  }

  return (
    <nav className={ className }>
      <input id="search_input" type="text" className="navbar-input"/>
      <button onClick = { _search }> Pesquisar </button>
    </nav>
  )
}

export default Navbar;