import React from 'react';
import Table from './table';

export default function App(){
    const students = [
        {
            name: 'Barry Allen',
            course: 'Track',
            grade: 90
        },
        {
            name: 'Cisco Ramon',
            course: 'Science',
            grade: 86
        },
        {
            name: 'Harrison Wells',
            course: 'Physics',
            grade: 97
        },
    ];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}
