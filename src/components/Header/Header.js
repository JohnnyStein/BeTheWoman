import React from 'react';

import { useLocation } from 'react-router-dom'; 

import {
    Menu
} from './styles';

export default function Header(){
    const location = useLocation();
    if(location.pathname  == '/presentation'){
        return(
            <></>
        );
    }else{
        return(
            <Menu>
                <h1>Menu</h1>
            </Menu>
        );
    }
}