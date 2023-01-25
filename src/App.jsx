import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import ToDo from './components/ToDo';
import ClassDisplay from './components/ClassDisplay';

export default function App() {
    return (
        <>
            <Nav />
            <div className="container">
                <ToDo />
            </div>
            <div className="container">
                <ClassDisplay students={students}/>
            </div>
        </>
    )
}


