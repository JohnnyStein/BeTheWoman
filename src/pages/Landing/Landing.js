import React, { Component } from 'react';

import { animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';
import {
    FirstLanding,
    SecondLanding,
    ThirdLanding,
    FourthLanding,
    LandingContainer
} from './styles';

import twitter from '../../global/assets/twitter.svg';
import instagram from '../../global/assets/instagram.svg';
import logo from '../../global/assets/logo.png';
import inlink from '../../global/assets/inlink.svg';
import womanWithBoardImg from '../../global/assets/woman-with-board.svg';
import medicalWoman from '../../global/assets/medical-woman.svg';
import arrowUpImg from '../../global/assets/arrow-up.svg';
import womanWithPhone from '../../global/assets/woman-with-phone.svg';
 

export default class Landing extends Component {
    render() {
        return (
            <LandingContainer>
                <FirstLanding>
                    <section>
                        <div>
                            <img src={logo} alt="Logo" />
                            <span>Be The Woman</span>
                        </div>
                        <div>
                            <a href='#'>
                                <img src={twitter} alt="Twitter"></img>
                            </a>
                            <a href='#'>
                                <img src={instagram} alt="Instagram"></img>
                            </a>
                        </div>
                    </section>
                    <h1>Tudo que vc<br /> precisa para se sentir<br /> mulher</h1>
                    <a href='/'>
                        Visitar
                        <img src={inlink}></img>
                    </a>
                </FirstLanding>
                <SecondLanding>
                    <div>
                        <img src={womanWithBoardImg} alt="Woman With Board" />
                        <h1>Saiba os direitos e o<br /> seu lugar na<br /> sociedade</h1>
                    </div>
                    <div>
                        <h1>Encontre dicas de<br /> saúde para<br /> melhorar seu<br /> bem-estar</h1>
                        <img src={medicalWoman} alt="Medic Woman" />
                    </div>
                </SecondLanding>
                <ThirdLanding>
                    <h1>Fique por dentro do mundo das<br /> mulheres com as notícias mais<br /> atuais</h1>
                </ThirdLanding>
                <FourthLanding>
                    <div>
                        <h1>Tudo isso na palma<br /> da sua mão,<br /> quando e onde<br /> quizer</h1>
                        <a onClick={()=> {
                            scroll.scrollToTop();
                        }}>
                            <img src={arrowUpImg} alt="Arrow Up" />
                        </a>
                    </div>
                    <img src={womanWithPhone} alt="Woman with phone" id="woman-with-phone" />
                </FourthLanding>
            </LandingContainer>

        );
    }
}
