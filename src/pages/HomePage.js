import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Table from 'react-bootstrap/Table';
//import * as ReactBootStrap from "react-bootstrap";
import { getElementError } from "@testing-library/react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import axios from 'axios';
//import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
//import paginationFactory from 'react-bootstrap-table2-paginator';  
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';  
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Paper from '@material-ui/core/Paper';
import useState from "react";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import BootStrapTable from 'react-bootstrap-table-next';  
import BootstrapTable from 'react-bootstrap-table-next';
import Modal from "react-bootstrap/Modal";
import { Animation } from '@devexpress/dx-react-chart';
//import * as ReactBootStrap from "react-bootstrap";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
//import Sonnet from 'react-bootstrap/Sonnet'
import filterFactory, { customFilter, textFilter } from 'react-bootstrap-table2-filter';  
import { colors } from "@material-ui/core";



const data = [
  { day: 'mon', value: 500 },
  { day: 'tue', value: 300 },
  { day: 'wed', value: 450 },
  { day: 'thu', value: 100 },
  { day: 'fri', value: 350 },
  
];
const patientDummyData = [
  { name: 'John Doe', weight: '140', height: '6', value: '500', description: 'Student'},
];

const dailyData = [
  { day: 'M', value: 300 },
  { day: 'tue', value: 500 },
];


class HomePage extends Component {
  constructor() {
    super();
  
   

    this.state = {
    /* storage:[
       {
         name:"",
         weight:"",
         height:"",
       }
     ],
     */
     data,
     dailyData,
     show: false,
     display: false,
     deleteDisp: false,
     weekDisplay: false,
     dailyDisplay: false,
     inputName: "",
     inputWeight:"",
     inputHeight:"",
     inputLimit:"",
     inputDescription:"",
     storage: [],
     historyStorage: [],
     dispHistoryName:"",
     histName:"",
     rows: [],
     name:"",
     Name:'',
     weight:'',
     height:'',
     value:'',
     description:'',
     patientDummyData: [],
     historyTable:[],
     nameVal:'',
     sendName:'',

     columns : [{
      dataField: 'name',
      text: 'name'
    }, {
      dataField: 'weight',
      text: 'weight',
      sort: true
    }, {
      dataField: 'height',
      text: 'height',
      sort: true
    }],

    columns1 : [ {
      dataField: 'Date',
      text: 'Date',
      sort: true
    }, {
      dataField: 'waterConsumption',
      text: 'consumption',
      sort: true
    }]
    };
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.showWeekGraph = this.showWeekGraph.bind(this);
    this.hideWeekGraph = this.hideWeekGraph.bind(this);

    this.showDailyGraph = this.showDailyGraph.bind(this);
    this.hideDailyGraph = this.hideDailyGraph.bind(this);

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
   
   /*
    console.log("The form was submitted with the following data:");
    console.log(this.state.inputName);
    console.log(this.state.inputWeight);
    console.log(this.state.inputHeight);
    console.log(this.state.inputLimit);
    console.log(this.state.inputDescription);
    const { inputName, inputWeight, inputHeight, inputLimit, inputDescription } = this.state;

    const detailPatient = {
      inputName,
      inputWeight,
      inputHeight,
      inputLimit,
      inputDescription
    };
    axios
      .post('http://localhost:9000/users/patientDetails', detailPatient)
      .then(() => {
      console.log('data Created: ',detailPatient)
    })
      .catch(err => {
        console.log('Not working!')
        console.error(err);
      });
      this.hideModal();
     */ 
  }


  uploadToDatabase = () => {
   
   
   
  
    console.log("The form was submitted with the following data:");
    console.log(this.state.inputName);
    console.log(this.state.inputWeight);
    console.log(this.state.inputHeight);
    
      
  }

  componentDidMount () {
    
    axios
    .get('http://localhost:9000/users/patientDetails')
    .then((res) => { const storage = res.data;
             this.setState({storage})
    })
    

    .catch(err => {
      console.error(err);
    });
   
   
   
  }
  
  getHistoryInfo (histName) {
    
    this.setState({histName})
    this.componentHistoryMount(histName)

  }
  
  componentHistoryMount (histName) {
    console.log("api history input:",histName.name)
  axios
  .get(`http://localhost:9000/users/patientHistory`, {
    params: {
      histName: histName.name
    }
  })
  .then((res) => { 
    const historyStorage = res.data;
           this.setState({historyStorage})
  })
  
  }


onSub = () => {
    
        this.props.history.push('/sign-up');
    
 }
 ongoto = () => {
    
  this.props.history.push('/patientList');

}
logout = () => {
    
  this.props.history.push('/sign-in');

}


showModal = () => {
  this.setState({ show: true });
};

hideModal = () => {
  this.setState({ show: false,
  inputName:null,
  inputWeight:null,
  inputHeight:null });

};

displayModal = () => {
  this.setState({ display: true });
};

closeModal = () => {
  this.setState({ display: false });
};

deleteDisplay = () => {
  this.setState({ deleteDisp: true });
};
deleteDisplayHide = () => {
  this.setState({ deleteDisp: false });
};

showWeekGraph = () => {
  this.setState({ weekDisplay: true });
  
}

hideWeekGraph = () => {
  this.setState({ weekDisplay: false });
}

showDailyGraph = () => {
  this.setState({ dailyDisplay: true });
}

hideDailyGraph = () => {
  this.setState({ dailyDisplay: false });
}

//name calling
sendNameval (name) {
  const sendName = name
  console.log('DataL',sendName)
  
}

  render() {
  const show = this.state.show 
  const hideModal = this.state.show
  const showModal =this.state.show
  const display = this.state.display
  const displayModal = this.state.display
  const closeModal = this.state.display
  const target = this.state.deleteDisplay
  const deleteDisplay = this.state.deleteDisp
  const deleteDisp = this.state.deleteDisp
  const deleteDisplayHide = this.state.deleteDisp
  
  const weekDisplay = this.state.weekDisplay
  const showWeekGraph = this.state.showWeekGraph
  const hideWeekGraph = this.state.hideWeekGraph
  
  const dailyDisplay = this.state.dailyDisplay
  const showDailyGraph = this.state.showDailyGraph
  const hideDailyGraph = this.state.hideDailyGraph
  const displayDayData = this.state.displayDayData
  const textFil = this.state.textFil
  
    const { nm } = this.props.location
    const { wht } = this.props.location
    const { hht } = this.props.location
     
    const {storage} = this.state;
    
    const {historyStorage} = this.state;
    
    const { data: chartData } = this.state;
    const {data: historyTable} = this.state
    const {dispHistoryName} = this.state
    const {rows} = this.state
    const { dailyData: chartDailyData } = this.state;
   // let rows = []
    //const data = this.state;
    //const dataArr = this.setState.res;
    {/*
    if(nm){
      for(var i=0; i<1;i++){
       rows.push(<tr><td>{nm}</td><td> &nbsp;&nbsp;{wht}</td><td>{hht}</td> <p style={{color:"#66dac7", textDecoration:"none"}}>&nbsp;&nbsp;&nbsp;&nbsp;Data inserted Successfully</p></tr>
       )
       }  
       
     }
    */}
    const {patientDummyData: dummyDetails} = this.state;
    const histName = this.state;
    
    const sendName = this.state.sendName
   
    const columns = [{
      dataField: 'name',
      text: 'Name',
      //filter: textFilter() 
    }, {
      dataField: 'weight',
      text: 'Weight',
      sort: true
    }, {
      dataField: 'height',
      text: 'Height',
      sort: true
    },
    {
      dataField: 'limit',
      text: 'Limit',
      sort: true
    },
    {
      dataField: 'description',
      text: 'Description',
      sort: true
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      onSelect: (rows) => {
        console.log("values:",rows)
        this.setState({rows})
        console.log(rows.name)
        //this.getHistoryInfo(rows.name)
        //this.componentHistoryMount(rows)
      },
     
    };
   
    const columns2 = [{
      dataField: 'day',
      text: 'Date',
      
    }, {
      dataField: 'value',
      text: 'Consumption',
      
    }];
  
    //const value =    this.state.storage
   const options = {  
    page: 2,   
    sizePerPageList: [ {  
      text: '3', value: 3  
    }, {  
      text: '10', value: 10  
    } ],   

    sizePerPage: 3,   
    pageStartIndex: 0,   
    paginationSize: 3,    
    prePage: 'Prev',   
    nextPage: 'Next',   
    firstPage: 'First',   
    lastPage: 'Last',   
    paginationPosition: 'top'    
  };  

  const options2 = {  
    page: 2,   
    sizePerPageList: [ {  
      text: '3', value: 3  
    }, {  
      text: '10', value: 10  
    }],   

    sizePerPage: 3,   
    pageStartIndex: 0,   
    paginationSize: 3,    
    prePage: 'Prev',   
    nextPage: 'Next',   
    firstPage: 'First',   
    lastPage: 'Last',
    paginationPosition: 'top'    
  };  
                          
    return (
      <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <ReactBootStrap.Navbar.Brand href="/#/smart-cup-app/HomePage">Home</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
 
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
     
      <ReactBootStrap.Nav.Link eventKey={2} href="/">
        Log out
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>

      <div className="">
          
          <div className="FormFielda">
            
             <div className="childContainer1">

              <div className='patientDetailHeadingContainer'>
                  <h5>Patient Details</h5>
              </div>
             
              <div className="tableDisplay">
             {/* <ReactBootStrap.Table keyField='name' data={storage } columns={ columns } pagination={ paginationFactory() } />*/
             } 
            
            <div className='patinetTableContainer'>
            <Table      striped bordered hover size="md"
                        
                        className='patientTablesize'
                        keyField='name'   
                         
                           
                        filter={ filterFactory() } 
                        //selectRow={ selectRow }
                        pagination={ paginationFactory(options) }
                        >
                          <thead>
                            <td> </td>
                            <td>Name</td>
                            <td>Weight</td>
                            <td>Height</td>
                            <td>Limit</td>
                            <td>Description</td>
                          </thead>
                          <tbody>
                          <tr>
                            <td><input type='radio' name='select' onClick= {this.sendNameval('John')}/></td>
                            <td>John Doe</td>
                            <td>144</td>
                            <td>6</td>
                            <td>500</td>
                            <td>Student</td>

                          </tr>
                          <tr>
                            <td><input type='radio'name='select'/></td>
                            <td>R. Ron</td>
                            <td>164</td>
                            <td>6.1</td>
                            <td>500</td>
                            <td>Faculty</td>

                          </tr>
                          <tr>
                            <td><input type='radio' name='select'/></td>
                            <td>John k</td>
                            <td>184</td>
                            <td>5.3</td>
                            <td>400</td>
                            <td>Student</td>

                          </tr>
                          </tbody>
                          </Table>
                          <div className='paginationContainer'>
                          <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" >1</a></li>
    <li class="page-item"><a class="page-link" >2</a></li>
    <li class="page-item"><a class="page-link" >3</a></li>
    <li class="page-item">
      <a class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
    </div>                    
            </div>           
          
          <div className='buttonContainer'>
          <>
         <Button type="new" className='newButton' size='sm' onClick={this.showModal}>New</Button>{' '}
         <Modal  animation={false}  show={show}
        onHide={this.hideModal}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Patient Details</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <form action="HomePage.js" onSubmit={this.handleSubmit} className="FormFields">
          <div className="">
         
            {/*<label className="FormField__Label_Modal" htmlFor="name">
              Name
            </label>*/}
            <input
              type="text"
              id="inputName"
              className="FormField__Input_Modal"
              placeholder="Enter full name"
              name="inputName"
              value={this.state.inputName}
              onChange={this.handleChange}
            />
            
          </div>

          {/*convert to weight*/}
          <div className="">
            {/*<label className="FormField__Label_Modal" htmlFor="weight">
              Weight
          </label>*/}
            <br/>
            <input
              type="number"
              id="inputWeight"
              className="FormField__Input_Modal"
              placeholder="Enter weight"
              name="inputWeight"
              value={this.state.inputWeight}
              onChange={this.handleChange}
            />
          </div>

          <div className="">
            {/*<label className="FormField__Label_Modal">Height</label>*/}
            <br/>
            <input
              type="number"
              id="inputHeight"
              className="FormField__Input_Modal"
              placeholder="Enter height"
              name="inputHeight"
              value={this.state.inputHeight}
              onChange={this.handleChange}
            />
           <div className="">
           {/*<label className="FormField__Label_Modal">
              Limit
            </label>*/}
            <br/>
            <input
              type="number"
              id="inputLimit"
              className="FormField__Input_Modal"
              placeholder="Enter Limit"
              name="inputLimit"
              value={this.state.inputLimit}
              onChange={this.handleChange}
            />
            </div>
            <div className="">
          {/*<label className="FormField__Label_Modal">
              Description
            </label>*/}
            <br/>
            <input
              type="text"
              id="inputDescription"
              className="FormField__Input_Modal"
              placeholder="Enter Description"
              name="inputDescription"
              value={this.state.inputDescription}
              onChange={this.handleChange}
            />
          </div>
          </div>
        </form>
                 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Add Patient
          </Button>{" "}
            
        </Modal.Footer>
       
      </Modal>
      
         <Button type="new" size='sm' className='deleteButton' onClick={this.deleteDisplay}>Delete</Button>{' '}
         <Modal  animation={false}  show={deleteDisp}
        onHide={this.deleteDisplayHide}
        backdrop="static"
        keyboard={false}
        size="sm"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Please select patient!</Modal.Title>
        </Modal.Header>
       
      </Modal>
         </>
         
         </div>
         <div className='historyNameContainer'>
           <div className='patientHistName'>
           <h5> History: 
             </h5>
           
           </div>
           <div>
             <div className= 'patientHistContainer'>
           <Table       striped bordered hover size="md"
                        striped  
                        hover
                        className='patientHistorytable'
                        keyField='name'>
             <thead>
    <tr>
      
      <th>Day</th>
      <th>Consumption</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>11/2</td>
      <td>400</td>
     
    </tr>
    <tr>
    <td>11/3</td>
    <td>500</td> 
    </tr>
    <tr>
    <td>11/5</td>
    <td>600</td> 
    </tr>
        </tbody>                  
            </Table>  
               </div>
          <div>
          <>
          <Button variant="primary" className="logButton"  onClick={this.displayModal} size="sm" block>
          Edit information
          </Button>
          <Modal
        show={display}
        onHide={this.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit or log new information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="Weight"/><br/><br/>
          <input placeholder="Height" size="lg"/><br/><br/>
          <input placeholder="Liquid limit"/><br/><br/>
          <input placeholder="Description" size="lg"/>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
          
      </div>
          
      </div>
      </div>
         
      </div> 
      
      </div>
      
      <div className="childContainter2">
   
      <>
    <ButtonGroup className="mb-2">
    <Button onClick={showWeekGraph} size='sm'>Weekly Analysis</Button>
    <Button onClick={showDailyGraph} size='sm'>Daily Analysis</Button>
    
    </ButtonGroup>
    <div className='chartContainer'>
    <Paper className="graph">
        <Chart
          data={chartData}
          className="chartWeek"
          show={weekDisplay}
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
      </div>
     </>
   {/*Tabs for daily and weelkly analysis*/}
   
   {/*
      <Tabs transition={false} id="noanim-tab-example">
  <Tab eventKey="week" title="Weekly Analysis">
  <Paper className="graph">
        <Chart
          data={chartData}
          className="chartWeek"
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
  </Tab>
  <Tab eventKey="day" title="Daily Analysis">
  
  <Paper className="graph">
        <Chart
          data={chartDailyData}
          className="chartDay"
        >
          <ArgumentAxis />
          <ValueAxis max={3} />

          <BarSeries
            valueField="value"
            argumentField="day"
          />
          <Title text="Daily Analysis" />
          <Animation />
        </Chart>
      </Paper>
    
  </Tab>
  <Tab eventKey="contact" title="Details" disabled>
    
  </Tab>
</Tabs>
   */}
      </div>
      </div>
          
         {/*
          <div className="FormField">
            <button className="FormField__Button mr-20" onClick={this.onSub}>
              Add new Patient
            </button>{" "}
            <button className="FormField__Button mr-20" onClick={this.ongoto}>
              View patients
            </button>{" "}
        
         //  {/* <button className="FormField__Button mr-20" onClick={this.logout}>
           //   Logout
           // </button>{" "} 
           // *
            <Link to="/" className="FormField__Link" ={{costylelor:"", textDecoration:"none"}}>
              Logout
            </Link>
            
          </div>
        */}
      </div>
     {/*
      <div>
       <h3>History</h3>
     </div>
     */}
      </div>
    );
  }
}

export default HomePage;
