import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

class AccountPage extends Component {
  constructor() {
    super();

    this.state = {
      prescribed: "",
      upperLimit: "",
      consumedAtleast: "",
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
  }

  render() {
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
     <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
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
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
           <div className="heading">
            <h1>
              <h2>Smart Cup Project</h2>
            </h1>
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="prescribed">
              Prescribed
            </label>
            <input
              type="number"
              id="prescribed"
              className="FormField__Input"
              placeholder="Enter prescribed value"
              name="prescribed"
              value={this.state.prescribed}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="upperLimit">
              Upper Limit
            </label>
            <input
              type="number"
              id="upperLimit"
              className="FormField__Input"
              placeholder="Enter upper limit"
              name="upperLimit"
              value={this.state.upperLimit}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="consumedAtleast">
              Consume Atleast
            </label>
            <input
              type="number"
              id="consumedAtleast"
              className="FormField__Input"
              placeholder="Enter comsume atleast"
              name="consumedAtleast"
              value={this.state.consumedAtleast}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Submit</button>{" "}
            <Link to="/" className="FormField__Link">
              Log out
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default AccountPage;
