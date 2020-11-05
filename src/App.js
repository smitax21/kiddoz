import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/homepage/homepage.component.jsx';
import ShopPage from './Pages/shop/shop.component';


const girlsWear = () => (
  <div>
    <h1> Girls Wear Page </h1>
  </div>
)

const boysWear = () => (
  <div>
    <h1> Boys Wear Page </h1>
  </div>
)

const girlsFootWear = () => (
  <div>
    <h1> Girls Foot Wear Page </h1>
  </div>
)

const boysFootWear = () => (
  <div>
    <h1> Boys Foot Wear Page </h1>
  </div>
)

const toddler = () => (
  <div>
    <h1> Toddler Page </h1>
  </div>
)

const toys = () => (
  <div>
    <h1> Toys Page </h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/girlsWear' component={girlsWear}/>
      <Route path='/boysWear' component={boysWear}/>
      <Route path='/girlsFootWear' component={girlsFootWear}/>
      <Route path='/boysFootWear' component={boysFootWear}/>
      <Route path='/toddler' component={toddler}/>
      <Route path='/toys' component={toys}/>
      <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  );
}

export default App;
