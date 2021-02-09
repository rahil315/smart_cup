import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import patientList from "./patientList";
import * as ReactBootStrap from "react-bootstrap";

class connectPatient extends Component {
  

  render() {
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Home</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="#features">Add patients</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">View patients</ReactBootStrap.Nav.Link>
    
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
     
      <ReactBootStrap.Nav.Link eventKey={2} href="/">
        Log out
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

        <div className="FormCenter">
       
          {/* convert to username*/}
          <div className="FormField">
          <div className="heading">
            
            <h1>Smart Cup Project</h1>
            
            <h2>Connect Patient </h2>

          </div>
         
          </div>
          <div>
              <Link to="/analytics" className="linkForm" style={{color:"white", textDecoration:"none", textAlign: "right"}}>
               View Analytics
              </Link>
          <div>
          <Link to="/HomePage" className="linkForm" style={{color:"white", textDecoration:"none", textAlign: "right"}}>
              Back
            </Link>
          </div>
         
          </div>
          </div>
          </div>
    );
  }
}

export default connectPatient;
