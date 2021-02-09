import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import axios from 'axios';
import patientList from "./patientList";
import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from "react-bootstrap";
import { getElementError } from "@testing-library/react";
import {PathLine} from 'react-svg-pathline'
import {LineChart} from "react-d3-components"
import { colors } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

class dailyAnalysis extends Component {
 
  render() {
    const { prescribedVal } = this.props.location
    const { upperLimit } = this.props.location
    const { lowerLimit } = this.props.location
    const { startDate } = this.props.location
    let rows = []
    //var LineChart = ReactD3.LineChart;
    let data = [
      {
      label: 'somethingA',
      values: [{x: 0, y: 0}, {x: 0, y: 300} ]
     
      },
      {
        label: 'somethingB',
        values: [{x: 0, y: 100}, {x: 10, y: 100}]
       
        },
        {
          label: 'somethingB',
          values: [{x: 0, y: 300}, {x: 10, y: 300}]
          }
  ];
     if(prescribedVal){
      for(var i=0; i<1;i++){
       rows.push(<tr><td>{prescribedVal}</td><td> &nbsp;&nbsp;{upperLimit}</td><td>{lowerLimit}</td></tr>
       )
       }  
       
     }

    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
     {/* <ReactBootStrap.Nav.Link href="#features">Add patients</ReactBootStrap.Nav.Link>
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
      <div className="FormCenter">
      <div className="heading">
       <h2>Smart Cup Project</h2>
       <h2> Daily data</h2>
       </div>
       <div>
             
             <ReactBootStrap.Table striped bordered hover variant="dark">
               <thead>
           <tr>
             <th>Prescribed Value</th>
             <th>Upper Limit</th>
             <th>Lower Limit</th>
             
           </tr>
                </thead>
                
                <tbody>
          
            {rows}
           </tbody>
         </ReactBootStrap.Table>
             </div>
             <div>
           {/*  
             <svg>x<PathLine 
            points={[ {x:200, y: 0}, {x:200, y:200}]} 
            stroke="white" 
            strokeWidth="2"
            fill="none"
            r={100}
            />
    </svg>
           */}
   
  
    <LineChart
                data={data}
                width={80}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
       
    <div>
      
    </div>
           
  
  
  
             </div>
          
      </div>

    </div>
    );
  }
}

export default dailyAnalysis;
