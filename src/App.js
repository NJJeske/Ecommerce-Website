import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInPage from './pages/SignIn/SignInPage';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
