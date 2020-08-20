import React from 'react';
import './App.css';
import EmployeeDirectory from './containers/EmployeeDirectory';

const employeeListings = [{name:"TJ", title:"Instructor", years:"4"}, {name:"Phil", title:"TA", years:"4"}, {name:"Cesar", title:"TA", years:"4"}];

function App() {
  return (
    <div>
     <><EmployeeDirectory employees={employeeListings} /></>
    </div>
  );
}

export default App;
