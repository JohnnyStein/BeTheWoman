import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import {
    Menu
} from './styles';

import imgLogoWhite from '../../global/assets/logo.png';
import imgFeed from '../../global/assets/feed.svg';
import imgNotification from '../../global/assets/notification.svg';
import imgNew from '../../global/assets/new.svg';
import imgTempAvatar from '../../global/assets/avatar.png';

export default function Header() {
    const location = useLocation();
    if (location.pathname == '/presentation') {
        return (
            <></>
        );
    } else {
        return (
            <Menu>
                <div className="left">
                    <img src={imgLogoWhite} alt="logo" />
                    <h1>Be the<br /> woman</h1>
                </div>
                <div className="right">
                    <Link to="/" className="feedIcon">
                        <img src={imgFeed} alt="Feed" />
                    </Link>
                    <Link to="/" className="notificationIcon">
                        <img src={imgNotification} alt="notification" />
                    </Link>
                    <Link to="/" className="newIcon">
                        <img src={imgNew} alt="Novo" />
                    </Link>
                    <Link to="/" className="avatarIcon">
                        <img src={imgTempAvatar} alt="Avatar" />
                    </Link>
                </div>
            </Menu>
        );
    }
}