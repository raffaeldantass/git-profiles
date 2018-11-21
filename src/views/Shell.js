import React from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';

const Shell = () => {
  return (
    <div className="container">
      <Navbar className = "nav" />

      <Main className = "main"/>

      <Aside className = "aside"/>

      <Footer className = "footer"/>
    </div>
  )
}

export default Shell;