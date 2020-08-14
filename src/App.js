import React from 'react';
import './App.css';
import EmployeeDirectory from './containers/EmployeeDirectory';

const directoryHeaders = ["Name", "Title", "Years"];
const employeeListings = [["TJ", "Instructor", "4"], ["Phil", "TA", "4"], ["Cesar", "TA", "4"]];

function App() {
  return (
    <div className="App">
     <><EmployeeDirectory headers={directoryHeaders} employees={employeeListings} /></>
    </div>
  );
}

export default App;
