import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>
        </BrowserRouter>
    );
}

export default App;