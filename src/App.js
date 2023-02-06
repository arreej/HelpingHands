import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Navbar} exact path="/" />
      </div>
    </Router>
  )
}

export default App;