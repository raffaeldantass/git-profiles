import React from 'react';

const Main = ({className, data}) => {
  var keyCount = 0;
  //Creates a unique Id for each Key prop.
  function iterator() {
    return keyCount++;
  }

  let repoBlock = data.map((repo) => {
    return (
      <section key = { iterator() }>
        <h2 key = { iterator() }> Repositório: { repo.name } </h2>
        <p key = { iterator() }> Linguagem: { repo.language === null ? "Nada encontrado" : repo.language } </p>
        <span key = { iterator() }> Stars: { repo.stargazers_count === 0 ? "Nenhuma ocorrencia" : repo.stargazers_count }  </span>
        <span key = { iterator() }> Forks: { repo.forks_count === 0 ? 0 : repo.forks_count }  </span>
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
