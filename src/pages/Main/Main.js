import React, { Component, useState } from 'react';
import Feed from '../../components/Feed/Feed';
import Sidebar from '../../components/SideBar/Sidebar';

import {
    MainContainer
} from './styles';

export default class Main extends Component {
    render() {
        return (

            <MainContainer>
                <main className="main-content">
                    <Feed />
                </main>
                <aside className="side-bar">
                    <Sidebar />
                </aside>
            </MainContainer>
        );
    }
}