import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import SplashComponent from '../components/SplashComponent';

const Shell = ({ data }) => {
  const { fetchRepositoriesReducer, fetchUserReducer } = data;
  
  return (
    <div className="container">
      <Navbar className = "nav" />

      { 
        fetchRepositoriesReducer.repos.length <= 1 ? 
        <SplashComponent /> : 
        <Main 
          className = "main"
          data = {fetchRepositoriesReducer.repos }
        /> 
      }

      <Aside 
        className = "aside" 
        photo = { fetchUserReducer.photo }
        name = { fetchUserReducer.name }
        user = { fetchUserReducer.user } 
        email = { fetchUserReducer.email }
        numberOfRepos = { fetchUserReducer.numberOfRepos }
        following = { fetchUserReducer.following } 
        followers = { fetchUserReducer.followers }
        site = { fetchUserReducer.site }
      />

      <Footer className = "footer"/>
    </div>
  )
}

export default Shell;