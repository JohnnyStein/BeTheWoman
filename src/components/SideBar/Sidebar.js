import React, { useState } from 'react';

import {
    SidebarComponent
} from './styles';

import imgSugestionTemp from '../../global/assets/sugestion-temp.png';

export default function Sidebar() {
    const [search, setSearch] = useState("");
    const [sugestion, setSugestion] = useState([
        {
            id: '1',
            name: 'Feminismo na educação infantil',
        },
        {
            id: '1',
            name: 'Feminismo na educação infantil',
        },
        {
            id: '1',
            name: 'Feminismo na educação infantil',
        },
    ]);
    return (
        <SidebarComponent>
            <header>
                <span>Bom Dia</span>
                <p>Daisy Ridley</p>
                <hr></hr>
                <input placeholder='Pesquisar' value={search} onChange={e => { setSearch(e.target.value) }}></input>
            </header>
            
            <main>
                <h1>Explorar</h1>
                <div>
                    {
                        sugestion.map(item => (
                            <div key={item.id}>
                                <a href={`${item.id}`}>{item.name}</a>
                            </div>
                        ))
                    }
                </div>
            </main>
        </SidebarComponent>
    );
}