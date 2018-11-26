import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const Shell = ({ data }) => {
  return (
    <div className="container">
      <Navbar className = "nav" />

      <Main 
        className = "main"
        repoName = { data.repos.repoName }
        language = { data.repos.language }
        stars = { data.repos.stars }
        forks = { data.repos.forks }
      />

      <Aside 
        className = "aside" 
        photo = { data.photo }
        name = { data.name }
        user = { data.user } 
        email = { data.email }
        numberOfRepos = { data.numberOfRepos }
        following = { data.following } 
        followers = { data.followers }
        site = { data.site }
      />

      <Footer className = "footer"/>
    </div>
  )
}

export default Shell;