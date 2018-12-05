import React from 'react';

const Aside = ({className, photo, name, email, numberOfRepos, following, followers, site, user}) => {
  return (
    <aside className={ className }>
      <img className = "aside__profile-photo" src= { photo } alt="Imagem" />

      <h1 className = "aside__profile-username"> { name } </h1>
      <h2 className = "aside__profile-email"> { email} </h2>
      <h2 className = "aside__profile-user">  { user } </h2>
      <h2 className = "aside__profile-reposNumber"> Repositórios: { numberOfRepos } </h2>
      <hr />

      <p className = "aside__profile-following"> Seguindo: { following } </p>
      <p className = "aside__profile-followers"> Seguidores: { followers } </p>
      <p>  <a target="_blank" className="aside__profile-website" href={ site }> { site } </a> </p>
    </aside>
  )
}

export default Aside;