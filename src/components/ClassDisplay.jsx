import React from 'react'
import { useState, useEffect } from "react";

export default function ClassDisplay(props) {
    const tableHeaders = ['ID', 'First Name', 'Last Name']
    const [students, setStudents] = useState([]);
    

    useEffect(() => {
        console.log('useEffect effect callback has been called')
        fetch(`https://scratched-juniper-salto.glitch.me/kekambas`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const classList = data;
            setStudents(classList);
        })
    }) 

    return (
        
        <div>
            <h1 className='text-center my-3'>Kekambas 106</h1>

            <table className='table table-primary table-striped'>
                <thead>
                    <tr className='fst-italic fs-4'>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.students.map( student => (
                        <tr key={student.id}>
                            <th>{student.id}</th>
                            <th>{student.first_name}</th>
                            <th> {student.last_name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
    