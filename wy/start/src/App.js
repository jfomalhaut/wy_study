import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

function Home() {
    return (
        <h1>Home Component</h1>
    );
}

function List() {
    return (
        <h1> List Component</h1>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
        </BrowserRouter>
    )
}

export default App;