import React, { Component} from "react";
import Alert from 'react-bootstrap/Alert'
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import AccountPage from "./AccountPage";
import weeklyAnalysis from "./weeklyAnalysis";
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
//import { Calendar } from 'react-date-range';
//import 'moment/locale/it.js';
//import { DatePicker, DatePickerInput } from 'rc-datepicker';
//import DatePicker from "react-datepicker";
 //import "react-datepicker/dist/react-datepicker.css";
import * as ReactBootStrap from "react-bootstrap";
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class patientList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prescribedVal: "",
      upperLimit: "",
      lowerLimit: "",
      startDate: new Date()
      //dateVal: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handChange = this.handChange.bind(this);
  }
  
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    //let date = target.date;
    this.setState({
      [name]: value,
      //startDate: date,
    });
  }
  handChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  handleSubmit(e) {
    e.preventDefault();
    
      this.props.history.push({pathname: '/dailyAnalysis',
      prescribedVal: this.state.prescribedVal,
      upperLimit: this.state.upperLimit,
      lowerLimit: this.state.lowerLimit,
      //startDate: this.state.startDate
  })
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    
  
  const { prescribedVal, upperLimit, lowerLimit } = this.state;

  const detail = {
    prescribedVal,
    upperLimit,
    lowerLimit,
  };
  axios
    .post('http://localhost:9000/users/patientDetails', detail)
    .then(() => console.log('data Created'))
    .catch(err => {
      console.error(err);
    });
  
}

 
 // handleSelect(date){
   // console.log(date); // native Date object
  //}
  
  /*onSub = () => {
    if(this.state.username === 'rahil' && this.state.password === 'drexel123'){
  
      this.props.history.push('/HomePage');
    
 }

  } */
 

  render() {
   
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
     
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        
        <ReactBootStrap.Nav.Link eventKey={2} href="/#/smart-cup-app/weeklyAnalysis">
             Weekly Analysis
          </ReactBootStrap.Nav.Link>

          <ReactBootStrap.Nav.Link eventKey={2} href="/#/smart-cup-app/monthlyAnalysis">
             Monthly Analysis
          </ReactBootStrap.Nav.Link>
         
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
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
         
          {/* convert to username*/}
          <div className="FormField">
          <div className="heading">
          
            <h2>Goal for the day?</h2>
          </div>

          <form onSubmit={ this.onFormSubmit }>
        <div className="form-group">
        <label className="FormField__Label" htmlFor="prescribedVal">
            
            </label>
           {/*   <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
              value={this.state.dateVal}
              className="FormField__Input"
          />
        */}
        </div>
      </form>
            <label className="FormField__Label" htmlFor="prescribedVal">
              Prescribed Value
            </label>
            <input
              type="number"
              id="prescribedVal"
              className="FormField__Input"
              placeholder="100"
              name="prescribedVal"
              min= {100}
              step= {100}
              value={this.state.prescribedVal}
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
              placeholder={100}
              name="upperLimit"
              min= {100}
              max= {500}
              step= {100}
              value={this.state.upperLimit}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="lowerLimit">
              Lower Limit
            </label>
            <input
              type="number"
              id="lowerLimit"
              className="FormField__Input"
              placeholder="100"
              name="lowerLimit"
              min= {100}
              max= {200}
              step= {100}
              value={this.state.lowerLimit}
              onChange={this.handleChange}
            />
          </div>
          <div>
         {/* <Calendar
          date={new Date()}
          onChange={this.handleSelect}
        />
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
         */}
         
          </div>
     

          <div className="FormField">
            <button className="FormField__Button mr-20" >Submit</button>{" "}
            
          </div>
          {/*
          <Link to="/weeklyAnalysis" className="linkForm" style={{ textDecoration:"none"}}>
               View Weekly Analysis
              </Link>
          */}
        </form>
      </div>
      </div>
    );
  }
}

export default patientList;
