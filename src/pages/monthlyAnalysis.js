import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import * as ReactBootStrap from "react-bootstrap";



class monthlyAnalysis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    

    return (
       <div>
       <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
     
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
      {/*    <ReactBootStrap.Nav.Link href="#features">Add patients</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing">View patients</ReactBootStrap.Nav.Link>
    */}
    <ReactBootStrap.Nav.Link eventKey={2} href="/#/smart-cup-app/patientList">
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
    <ReactBootStrap.Table striped bordered hover variant="">
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Hour</th>
      <th>Consumed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>11/2</td>
      <td>2</td>
      <td>500</td>
    </tr>
    <tr>
      <td>2</td>
      <td>11/3</td>
      <td>1</td>
      <td>300</td>
    </tr>
    <tr>
      <td>3</td>
      <td>11/5</td>
      <td>4</td>
      <td>400</td>
    </tr>
  </tbody>
</ReactBootStrap.Table>
   
      </div>
    );
  }
}
export default monthlyAnalysis;