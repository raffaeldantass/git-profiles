import React from 'react';

const Main = ({className, data}) => {
  let repoBlock = data.map((repo) => {
    return (
      <section key = {repo.id }>
        <h2 key = {repo.id }> Repositório: { repo.name } </h2>
        <p key = {repo.id }> Linguagem: { repo.language } </p>
        <span key = {repo.id }> Stars: {repo.stargazers_count}  </span>
        <span key = {repo.id }> Forks: {repo.forks_count}  </span>
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
