import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Shell = ({ data }) => {
  const { fetchReposReducer, fetchUserReducer } = data;
  console.log(fetchReposReducer.repos.length)
  return (
    <div className="container">
      <Navbar className = "nav" />

      
      { fetchReposReducer.repos.length <= 1 ? 
      <Loading /> : 
      <Main 
        className = "main"
        data = {fetchReposReducer.repos }
      /> }
      

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