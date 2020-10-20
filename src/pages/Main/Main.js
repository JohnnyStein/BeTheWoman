import React, { Component, useState } from 'react';

import CardFeed from '../../components/CardFeed/CardFeed';

import {
    MainContainer,
    Grid
} from './styles';
import avatar from '../../global/assets/avatar.png';
import Sidebar from '../../components/SideBar/Sidebar';

export default function Main() {
    const data = [
        {
            title: 'Feminismo na educação infantil',
            author: 'Mina Sundwall',
            avatar,
            likes: 34,
            description: 'Feminismo é um conjunto de movimentos políticos, sociais, ideologias e filosofias que têm como objetivo comum: direitos equânimes e uma vivência humana por meio do empoderamento feminino.',
        },
        
    ]
    return (
        <Grid>
            <MainContainer>

                {
                    data.map(comment => (
                        <CardFeed data={comment}></CardFeed>
                    ))
                }
            </MainContainer>
            <Sidebar></Sidebar>
        </Grid>
    );

}