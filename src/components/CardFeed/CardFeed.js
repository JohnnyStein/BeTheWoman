import React from 'react';
import { CardContainer } from './styles';

import favorite from '../../global/assets/favorite.svg';
import { IconButton } from '@material-ui/core';


export default function CardFeed(props) {
    const { title, author, avatar, description, likes, data } = props.data;
    console.log(data);
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
                        <div>
                            <p>{author} *</p>
                            <p>{data}</p>
                        </div>
                    </a>
                </div>
                <IconButton>
                    <a href='#'>
                        <img src={favorite} title={likes}></img>
                    </a>
                </IconButton>
            </article>
        </CardContainer>
    );
}