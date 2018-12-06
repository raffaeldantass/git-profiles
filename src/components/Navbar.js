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
    <nav id="navbar" className={ className }>
      <input id="search_input" type="text" className="nav__input" placeholder="insira um usuario e clique em pesquisar"/>
      <button onClick = { _search } className="nav__button" > Pesquisar </button>
    </nav>
  )
}

export default Navbar;