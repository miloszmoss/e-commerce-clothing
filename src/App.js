import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignIn from './pages/signInAndUp/SignInAndUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
