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

const dataa = [
  { day: 'mon', value: 500 },
  { day: 'tue', value: 300 },
  { day: 'wed', value: 450 },
  { day: 'thu', value: 100 },
  { day: 'fri', value: 350 },
  
];
const data = [
  { day: 'mon', value: 500 },
 
];
class weeklyAnalysis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataa,
      data,
    };
  }

  render() {
    const { dataa: chartDataa } = this.state;
    const { data: chartData } = this.state;
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
      <Paper>
        <Chart
          data={chartDataa}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="value"
            argumentField="day"
          />
          <Title text="Weekly Analysis" />
          <Animation />
        </Chart>
      </Paper>
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="value"
            argumentField="day"
          />
          <Title text="Daily Analysis" />
          <Animation />
        </Chart>
      </Paper>
      </div>
    );
  }
}
export default weeklyAnalysis;