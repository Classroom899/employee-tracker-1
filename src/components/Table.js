// has to be capitalized 
import React from "react";

export default function ({ data }) {
    const columns = Object.keys(data[0]).map(column => column.toUpperCase())
    const TableRow = ({rowData, tag}) => { // created mini component and tag (HTML tag) is used to render the data
        return rowData.map (cell => tag === "th" ? <th>{cell}</th>: <td>{cell}</td>)

    } // declared an inner component to be used by the main component 
    return (<>
        <table>
            <thead>
                <tr>
                    <TableRow rowData={columns} tag="th" />
                </tr>
            </thead>
            <tbody>
                    {data.map(row => <tr><TableRow rowData={Object.values(row)} tag="td" /></tr>)}
            </tbody>
        </table>
    </>); // empty div
}