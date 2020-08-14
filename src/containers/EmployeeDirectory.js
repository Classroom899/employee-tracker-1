import React from "react";

// external library 
import Table from "../components/Table"



// internal library 
export default function ({ headers, employees }) {
    return(<>
    <Table columns={headers} data={employees}/>

    </>)
}