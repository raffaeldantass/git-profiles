import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import SplashComponent from '../components/SplashComponent';
import TabNameHandler from '../helpers/tabNameHandler';

const Shell = ({ data }) => {
  const { fetchRepositoriesReducer, fetchUserReducer } = data;
  
  //Changes the tab text in browser 
  TabNameHandler(fetchUserReducer);

  return (
    <div className="container">
      <Navbar className = "nav" />

      { 
        fetchRepositoriesReducer.get('repos').size <= 1 ? 
        <SplashComponent /> : 
        <Main 
          className = "main"
          data = {fetchRepositoriesReducer.get('repos') }
        /> 
      }

      <Aside 
        className = "aside" 
        photo = { fetchUserReducer.get('photo') }
        name = { fetchUserReducer.get('name') }
        user = { fetchUserReducer.get('user') } 
        email = { fetchUserReducer.get('email') }
        numberOfRepos = { fetchUserReducer.get('numberOfRepos') }
        following = { fetchUserReducer.get('following') } 
        followers = { fetchUserReducer.get('followers') }
        site = { fetchUserReducer.get('site') }
      />

      <Footer className = "footer"/>
    </div>
  )
}

export default Shell;