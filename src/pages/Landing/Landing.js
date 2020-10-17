import React, { Component } from 'react';

import {
    FirstLanding,
    LandingContainer
} from './styles';

import twitter from '../../global/assets/twitter.svg';
import instagram from '../../global/assets/instagram.svg';
import logo from '../../global/assets/logo.png';
import inlink from '../../global/assets/inlink.svg';



export default class Landing extends Component {
    render() {
        return (
            <LandingContainer>
                <FirstLanding>
                    <section>
                        <div>
                            <img src={logo} />
                            <span>Be The Woman</span>
                        </div>
                        <div>
                            <a href='#'>
                                <img src={twitter}></img>
                            </a>
                            <a href='#'>
                                <img src={instagram}></img>
                            </a>
                        </div>
                    </section>
                    <h1>Tudo que vc<br /> precisa para se sentir<br /> mulher</h1>
                    <a href='#'>
                        Visitar
                        <img src={inlink}></img>
                    </a>
                </FirstLanding>
            </LandingContainer>
        );
    }
}
