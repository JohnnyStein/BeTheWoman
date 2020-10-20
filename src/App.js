import React, { Component } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './routes';
import Landing from './pages/Landing/Landing';

import './global/index.css';
import Sidebar from './components/SideBar/Sidebar';


export default function App() {
    const acess = localStorage.getItem('@welcome-bewoman/acess');
    if (acess == 'false') {
        localStorage.setItem('@welcome-bewoman/acess', false);
        return (
            <BrowserRouter>
                <Header></Header>
                <Routes></Routes>
            </BrowserRouter>
        );
    } else {
        localStorage.setItem('@welcome-bewoman/acess', false);
        return (
            <BrowserRouter>
                <Landing />
            </BrowserRouter>
        )
    }
}
