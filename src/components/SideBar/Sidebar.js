import React, { useState } from 'react';

import {
    SidebarComponent
} from './styles';

import imgSugestionTemp from '../../global/assets/sugestion-temp.png';

export default function Sidebar() {
    const [search, setSearch] = useState("");
    const [sugestion, setSugestion] = useState([
        {
            name: 'Daisy Ridley',
            avatar: imgSugestionTemp
        },
    ]);
    return (
        <SidebarComponent>
           <h1>adfafs</h1>
        </SidebarComponent>
    );
}