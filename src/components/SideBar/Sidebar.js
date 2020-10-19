import React, { useState } from 'react';

import {
    SidebarComponent
} from './styles';

import imgSearch from '../../global/assets/search.svg';
import imgSugestionTemp from '../../global/assets/sugestion-temp.png';

export default function Sidebar() {
    const [search, setSearch] = useState("");

    return (
        <SidebarComponent>
            <div className="top">
                <h1>Bom Dia<br />Daisy Ridley</h1>
                <div className="input-search">
                    <input
                        placeholder="Pesquisar"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="searchInput"
                    />

                    <img src={imgSearch} alt="Search" />
                </div>
            </div>
            <div className="bottom">
                <h1>Explorar</h1>
                <div className="suggestionContainer">
                    <img src={imgSugestionTemp} alt="Suggestion" />
                    <p>Daisy Ridley</p>
                </div>
                <div className="suggestionContainer">
                    <img src={imgSugestionTemp} alt="Suggestion" />
                    <p>Daisy Ridley</p>
                </div>
                <div className="suggestionContainer">
                    <img src={imgSugestionTemp} alt="Suggestion" />
                    <p>Daisy Ridley</p>
                </div>
                <div className="suggestionContainer">
                    <img src={imgSugestionTemp} alt="Suggestion" />
                    <p>Daisy Ridley</p>
                </div>
                <div className="suggestionContainer">
                    <img src={imgSugestionTemp} alt="Suggestion" />
                    <p>Daisy Ridley</p>
                </div>
            </div>
        </SidebarComponent>
    );
}