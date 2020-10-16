import React from 'react';

import { Switch } from 'react-router-dom';

import './style.css';
import Header from './components/Header/Header';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>
  );
}
