import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
