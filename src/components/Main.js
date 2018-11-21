import React from 'react';

const Main = ({className}) => {
  return (
    <main className={ className }>
      <h2> Nome Repositório </h2>
      <p> Tipo Linguagem </p>
      <span> Stars: </span>
      <span> Forks: </span>
    </main>
  )
}

export default Main;