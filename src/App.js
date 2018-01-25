import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/loginForm";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditProfile from './components/editProfile';
import { Route } from 'react-router-dom';
import Persons from './component/Persons';
// import MovieTable from './component/demo'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
          {/*{this.props.children}*/}
          {/*<Route exact path="/" component={Login}/>*/}
          <Route exact={true} path="/" component={Register}/>
          <Route path="/dashboard" component={Dashboard}  />
          <Route path="/editProfile" component={EditProfile}/>
          <Route path="/data" component={Persons}/>
          {/*<Route path="/demo" component={MovieTable}/>*/}
      </div>
    );
  }
}

export default App;
