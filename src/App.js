import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {
 constructor(props){
   super(props)
   this.state={
     employees:[],
   }
  }
  componentDidMount(){ // when component "init" basically, do this
    fetch('http://localhost:3005/SogetiNewHires')//call to API
    .then(employees => employees.json()) //assign data from call to employees
    .then(employees_data => { 
      console.log(employees_data) //log it for funsies
      this.setState({
        employees: employees_data,  //update the state w/ the data
      })
    }) 
    .catch(err =>{ console.log(err)}) //catch any errors
    
  }
  render(){
    return (
      <div className="App">
        <h1> Sogeit New Hire Directory </h1>
          <div className = "row">
            {this.state.employees.map((employee, index) =>{ //map employee by index
            return(
              <div className="media col-12  mb-4 p-3 directory-entry">
                <img className="mr-3 directory-image" src = {employee.imageURL}  alt="..."/>
                <div className="media-body">
                <h5 className="mt-0" key = {index}> {employee.name}</h5> 
           
                    <h6 className="mt-0 " key = {index}> {employee.name} is part of Sogeti's January 2020 class. 
                    {employee.gender==="M" ? "He":"She"} is working as a {employee.position} in our {employee.practice} practice. 
                    {employee.name} located in {employee.location}. </h6>
                  
                    <ul className="list-group list-group-flush" > 
                      Contact Information
                      <li className="list-group-item " key = {index}>{employee.email}</li>
                      <li className="list-group-item " key = {index}>{employee.gitHub}</li>
                    
                    </ul>
                
              
                                
                </div>
              </div>
              )
            }
            )}
          </div>
        
      </div>
    );
  }
}

export default App;
