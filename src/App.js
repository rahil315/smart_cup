import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";

import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import patientList from "./pages/patientList";
import dailyAnalysis from "./pages/dailyAnalysis";
import weeklyAnalysis from "./pages/weeklyAnalysis";
import monthlyAnalysis from "./pages/monthlyAnalysis";
import connectPatient from "./pages/connectPatient"
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
            <Route path="/patientList" component={patientList}></Route>
            <Route path="/AccountPage" component={AccountPage}></Route>
            <Route path="/dailyAnalysis" component={dailyAnalysis}></Route>
            <Route path="/weeklyAnalysis" component={weeklyAnalysis}></Route>
            <Route path="/monthlyAnalysis" component={monthlyAnalysis}></Route>
            <Route path="/connectPatient" component={connectPatient}></Route>
            <Route path="/sign-up" component={SignUpForm}></Route>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
