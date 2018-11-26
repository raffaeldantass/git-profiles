import React from 'react';

const Aside = ({className, photo, name, email, numberOfRepos, following, followers, site, user}) => {
  return (
    <aside className={ className }>
      <img src= { photo } alt="Imagem" width="150" />

      <h1> { name } </h1>
      <h2> { email} </h2>
      <h2> { user } </h2>
      <h2> Quantidade Repositórios: { numberOfRepos } </h2>
      <hr />

      <p> Seguindo: { following } </p>
      <p> Seguidores: { followers } </p>
      <p> { site } </p>
    </aside>
  )
}

export default Aside;