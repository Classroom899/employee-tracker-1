import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


// external library 
import Table from "../components/Table"



// internal library 
export default function ({ employees }) {
    const [state, setState] = useState(employees)
    const [search, setSearch] = useState("")
    const sortByName = (reverse = false) => {
        const data = state.map(employee => employee)
        console.log(data);
        data.sort((e, em) => {
            if (e.name < em.name) {
                return reverse ? 1 : -1;
            } else if (e.name > em.name) { // sorting by alphabetical here
                return reverse ? -1 : 1; // how it will be reversed
            } else {
                return 0;
            }
        })

        setState(data);
    }

    const searchHandler = (event) => {
        const {value} = event.target;
        if (value && value.length) { // checking the value
            const data = employees.filter(e => e.name.includes(value)) // filter this value and making sure it's a substring in the name
            if (data.length) { // if it found any matching data
                setState(data)
            } else {
                setState(Object.keys(employees[0]).reduce((a,k) => ({...a, k: ""}), {})) // set that default object here if it does not turn back any data
            }
            // setState(data)
        } else { 
            setState(employees) // if no search term, set it back to the original data set 
        }
        setSearch(value); // setting my value of the search to keep it between renders
    } 
    return (<>
        <input value={search} onChange={searchHandler}/> 
        <div className="table-controls">
            <p>Sort by Name:</p>
            <button onClick={() => setState(employees)}>Clear</button>
            <button onClick={() => sortByName(true)}><FontAwesomeIcon icon={faArrowDown} /></button>
            <button onClick={() => sortByName(false)}><FontAwesomeIcon icon={faArrowUp} /></button>
        </div>
        <Table data={state} />

    </>)
}