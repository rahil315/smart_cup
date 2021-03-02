import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import SignInForm from "./cup_signin_homePage/SignInForm";


import HomePage from "./cup_signin_homePage/HomePage";

import "./App.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


class App extends Component {

  render() {
    return (
      <Router basename="smart-cup-app">
        <div className="App">
          
          <div className="App__Form">
            <Route exact path="/" component={SignInForm}></Route>
            <Route path="/HomePage" component={HomePage}></Route>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
