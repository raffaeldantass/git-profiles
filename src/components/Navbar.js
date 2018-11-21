import React from 'react';

const Navbar = ({className}) => {
  return (
    <nav className={ className }>
      <input type="text" className="navbar-input"/>
      <button> Pesquisar </button>
    </nav>
  )
}

export default Navbar;