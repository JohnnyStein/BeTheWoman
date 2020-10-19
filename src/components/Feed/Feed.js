import React from 'react';
import { FeedContainer } from './styles';

import imgTempAvatar from '../../global/assets/avatar.png';

export default function Feed() {
    return (
        <FeedContainer>
            <div className="post-container">
                <div className="top">
                    <h1>Feminisno louco</h1>
                    <div className="name-placeholder">
                        <p>Daisy Ridley</p>
                        <img src={imgTempAvatar} alt="Avatar" />
                    </div>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam nec orci turpis. Phasellus augue quam, accumsan id nunc sed, suscipit.</p>
            </div>

            <div className="post-container">
                <div className="top">
                    <h1>Feminisno louco</h1>
                    <div className="name-placeholder">
                        <p>Daisy Ridley</p>
                        <img src={imgTempAvatar} alt="Avatar" />
                    </div>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam nec orci turpis. Phasellus augue quam, accumsan id nunc sed, suscipit.</p>
            </div>
        </FeedContainer>
    );
}