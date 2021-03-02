import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';

import Button from 'react-bootstrap/Button'

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.username === 'rahil' && this.state.password === 'drexel123'){
  
      this.props.history.push('/HomePage');
    
 }
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  /*onSub = () => {
    if(this.state.username === 'rahil' && this.state.password === 'drexel123'){
  
      this.props.history.push('/HomePage');
    
 }

  } */
  render() {
    return (
     
     <div className="FormSignin">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          {/* convert to username*/}
          <div className="mainHeading">
          <div className="heading">
            
              <h2>Smart Cup Project</h2>
            
          </div>
          
            <label className="FormField__Label" htmlFor="username">
            {/*  <p>Username</p>*/}
            </label>
            <input
              type="text"
              id="username"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
             
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
             {/* <p>Password</p>*/}
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
         
            <Button variant="primary" className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In</Button>{' '}
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
