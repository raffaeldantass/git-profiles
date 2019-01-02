import React from 'react';
import { get } from '../../node_modules/immutable';

const Main = ({className, data}) => {
  var keyCount = 0;
  //Creates an unique Id for each Key prop.
  function iterator() {
    return keyCount++;
  }

  let repoBlock = data.map((repo) => {
    return (
      <section key = { iterator() } className="main__repo-block">
        <h2 key = { iterator() }> Repositório: { repo.get('name') } </h2>
        <p key = { iterator() }> Linguagem: { repo.get('language') === null ? "Não definido" : repo.get('language') } </p>
        <span key = { iterator() }> Stars: { repo.get('stars') }  </span>
        <span key = { iterator() }> Forks: { repo.get('forks') }  </span>
      </section>
    )
  })

  return (
    <main className={ className }>
      <div>
        { repoBlock }
      </div>
    </main>
  )
}

export default Main;
