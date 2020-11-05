import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component.jsx';


const girlsWear = () => (
  <div>
    <h1> Girls Wear Page </h1>
  </div>
)

function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage}/>
      <Route path='/girlsWear' component={girlsWear}/>
    </div>
  );
}

export default App;
