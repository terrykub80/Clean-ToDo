import React from 'react';
import Nav from './components/Nav';
import ToDo from './components/ToDo';

export default function App() {
    return (
        <>
            <Nav />
            <div className="container">
                <ToDo />
            </div>
        </>
    )
}

export default App;
