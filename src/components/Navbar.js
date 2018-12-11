import React from 'react';
import { fetchSearch } from '../../store/actions/FetchSearch';
import { searchRepos } from '../../store/actions/FetchRepos';
import { clearSearch } from '../../store/actions/ClearSearch';

const Navbar = ({className}) => {
  window.addEventListener('keydown', (pressButton) => {
    const pressEnter =  pressButton.wich == 13 || pressButton.keyCode == 13;

    const pressEsc = pressButton.wich == 27 || pressButton.keyCode == 27;
    if(pressEnter) { search() };
    if(pressEsc) { clearSearch() };
  });
  
  const search = () => {
    const searchInput = document.getElementById('search_input');
    fetchSearch(searchInput.value);
    searchRepos(searchInput.value);
  }

  return (
    <nav id="navbar" className={ className }>
      <label className="nav__label" htmlFor="search_input"> Pesquisar User: </label>
      <input id="search_input" type="text" className="nav__input" placeholder="insira um usuario e clique em pesquisar"/>
      <button onClick = { search } className="nav__button" > Pesquisar </button>
      <button onClick = { clearSearch } className="nav__button"> Limpar </button>
    </nav>
  )
}

export default Navbar;