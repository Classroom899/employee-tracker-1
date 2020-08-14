import React, { useState } from "react";

// external library 
import Table from "../components/Table"



// internal library 
export default function ({ headers, employees }) {
    const [state, setState] = useState(employees)
    const sortByName = () => {
        const data = state.map(employee => employee)
        console.log(data);
        data.sort((e, em) => {
            if (e[0] < em[0]) {
                return -1;
            } else if (e[0] > em[0]) { // sorting by alphabetical here
                return 1;
            } else {
                return 0;
            }
        })

        setState(data);
    }
    return (<>
        <button onClick={sortByName}>Sort By Name</button>
        <Table columns={headers} data={state} />

    </>)
}