import React from 'react';

const Main = ({className, repoName, language, stars, forks}) => {
  return (
    <main className={ className }>
      <h2> { repoName } </h2>
      <p> { language } </p>
      <span> Stars: { stars } </span>
      <span> Forks: { forks } </span>
    </main>
  )
}

export default Main;