import React from 'react';

export default function Table(){
    return (
        <table className="table">
            <thead className="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Michael Scott</td>
                <td>Regional Managing</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Dwight Shrute</td>
                <td>Beet Farming</td>
                <td>93</td>
            </tr>
            <tr>
                <td>Jim Halpert</td>
                <td>Pranks</td>
                <td>100</td>
            </tr>
            </tbody>
        </table>
    );
}
