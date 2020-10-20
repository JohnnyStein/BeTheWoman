import React, { useEffect, useState } from 'react';

import { useLocation, Link } from 'react-router-dom';

import {
    Menu
} from './styles';

import avatar from '../../global/assets/avatar.png';
import logo from '../../global/assets/logo.png';
import feed from '../../global/assets/feed.svg';
import notify from '../../global/assets/notification.svg';
import maker from '../../global/assets/new.svg';
import { IconButton } from '@material-ui/core';

export default function Header() {
    const location = useLocation();
    const menu = [
        {
            path: '/',
            title: 'Feed',
            img: feed
        },
        {
            path: '/notifications',
            title: 'Notifications',
            img: notify
        },
        {
            path: '/maker',
            title: 'Maker Post',
            img: maker
        }
    ]

    if (location.pathname == '/presentation') {
        return (
            <></>
        );
    } else {
        return (
            <Menu>
                <div>
                    <IconButton>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill='none'><path d="M0 0h24v24H0z"  /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="white" /></svg>
                    </IconButton>
                </div>
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <article>
                    {
                        menu.map(item => (
                            (location.pathname == item.path)
                                ?
                                <Link to={item.path} style={{ background: '#F5DD00' }} >
                                    <img src={item.img} alt={item.title}></img>
                                </Link>
                                :
                                <Link to={item.path} >
                                    <img src={item.img} alt={item.title}></img>
                                </Link>
                        ))

                    }
                    <div>
                        <Link to='' >
                            <img src={avatar}></img>
                        </Link>
                    </div>
                </article>
            </Menu>
        );
    }
}