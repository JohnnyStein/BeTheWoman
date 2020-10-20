import React from 'react';
import { CardContainer } from './styles';

import favorite from '../../global/assets/favorite.svg';

export default function CardFeed(props) {
    const { title, author, avatar, description, likes } = props.data;
    return (
        <CardContainer>
            <section>
                <a href='#'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </a>
            </section>
            <article>
                <div >
                    <a>
                        <img src={avatar}></img>
                        <p>{author}</p>
                    </a>
                </div>
                <a href='#'>
                    <img src={favorite} title={likes}></img>
                </a>
            </article>
        </CardContainer>
    );
}