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
                <section>
                    <img src={logo} alt="logo" />
                </section>
                <article>
                    {
                        menu.map(item => (
                            (location.pathname == item.path)
                            ?
                            <Link to={item.path} style={{background: '#F5DD00'}} >
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