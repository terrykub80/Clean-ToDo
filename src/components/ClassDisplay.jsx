import React from 'react'
import { useState, useEffect } from "react";

export default function ClassDisplay(props) {

    const tableHeaders = ['ID', 'First Name', 'Last Name']
    const [students, setStudents] = useState([])    
        

    useEffect(() => {
        fetch(`https://scratched-juniper-salto.glitch.me/kekambas`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);
                
        })
    }, []) 

    const getOrClear = () => {
        if (students.length) {
            setStudents([])
        } else {
            fetch(`https://scratched-juniper-salto.glitch.me/kekambas`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setStudents(data);
                });
        } 
    };

    return (
               
        
        <div>
            <h1 className='text-center my-3'>Kekambas-106</h1>
            <button className='btn btn-primary' onClick={getOrClear}>{ students.length ? "Clear Kekambas" : "Get Kekambas"}</button> 
            <table className='table table-striped'>
                <thead>
                    <tr className='fst-italic fs-4'>
                        {tableHeaders.map((th, i) => <th key={i}>{th}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {students.map( student => (
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
    