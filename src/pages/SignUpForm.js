import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";

class SignUpForm extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
     
      name: "",
      weight: "",
      height: "",
      
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
   
   
  
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    
    const { name, weight, height } = this.state;

    const detail = {
      name,
      weight,
      height,
    };
    axios
      .post('http://localhost:9000/users/patientDetails', detail)
      .then(() => {
      console.log('data Created')
      this.props.history.push({pathname: '/HomePage',
      name: this.state.name,
      weight:this.state.weight,
      height:this.state.height
    })})
      .catch(err => {
        console.error(err);
      });
      
  }
  
  render() {
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
     
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        {/*  <ReactBootStrap.Nav.Link href="#features">Add patients</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing">View patients</ReactBootStrap.Nav.Link>
    */}
     <ReactBootStrap.Nav.Link eventKey={2} href="/#/smart-cup-app/HomePage">
            Back
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
       
          <ReactBootStrap.Nav.Link eventKey={2} href="/">
            Log out
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
      <div className="FormCenter">
        <form action="HomePage.js" onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
         
            <div>
              <h2>Enter Patient details</h2>
            </div>
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          {/*convert to weight*/}
          <div className="FormField">
            <label className="FormField__Label" htmlFor="weight">
              Weight
            </label>
            <input
              type="number"
              id="weight"
              className="FormField__Input"
              placeholder="Enter your weight"
              name="weight"
              value={this.state.weight}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label">Height</label>
            <input
              type="number"
              id="height"
              className="FormField__Input"
              placeholder="Enter your height"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
          
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Add Patient</button>{" "}
            
            {/*
            <Link to={{pathname: '/HomePage',
                       }} className="FormField__Link">
              Back
            </Link>
                      */}
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignUpForm;
