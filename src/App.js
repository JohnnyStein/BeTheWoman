import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import './global/index.css';
import Header from './components/Header/Header';
import Routes from './routes';
import Landing from './pages/Landing/Landing';

export default class App extends Component {
    render() {
        const acess = localStorage.getItem('@welcome-bewoman/acess');        
        if (acess !== 'false') {
            localStorage.setItem('@welcome-bewoman/acess', true);
            return (
                <BrowserRouter>
                    <Header />
                    <Routes />
                </BrowserRouter>
            );
        } else {
            localStorage.setItem('@welcome-bewoman/acess', false);
            return(  
                <BrowserRouter>
                    <Landing/>
                </BrowserRouter>
            )
        }
    }
}
