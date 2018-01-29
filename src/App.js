import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Persons from './component/Persons';
class App extends Component {
  render() {
    return (
      <div className="App">
          {/*//<Route exact={true} path="/" component={Register}/>*/}
          {/*//<Route path="/dashboard" component={Dashboard}  />*/}
          <Route path="/data" component={Persons}/>
      </div>
    );
  }
}

export default App;
