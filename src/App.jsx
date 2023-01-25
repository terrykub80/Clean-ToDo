import React from 'react';
import { useState} from "react";
import Nav from './components/Nav';
import ToDo from './components/ToDo';
import ClassDisplay from './components/ClassDisplay';


export default function App() {
    const [students, setStudents] = useState([]);
    return (
        <>
            <Nav />
            <div className="container">
                <ToDo />
            </div>
            <div className="container">
                <h1 className='text-center my-3'>Kekambas 106</h1>
                <ClassDisplay students={students}/>
            </div>
        </>
    )
}


