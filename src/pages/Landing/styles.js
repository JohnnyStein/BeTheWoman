import styled from 'styled-components';

import back from '../../global/assets/back.svg';


export const LandingContainer = styled.section`
    width: 100%;
`;

export const FirstLanding = styled.section`
    width: 100%;
    height: 100vh;
    padding: 20px 80px 10px 80px;
    background: linear-gradient(147.31deg, #F00F53 23.71%, #FFB9CE 81.14%), #F82C6A;
    background-image: url(${back});
    background-position: right bottom;
    background-size: 60rem;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:first-child{
            display: flex;
            align-items: center;
            span{
                font-family: Poppins, sans-serif;
                color: white;
                font-size: 20px;
                font-weight: 700;
                width: 100%;
                max-width: 120px;
            }
            img{
                width: 90px;
                margin-right: 10px;
            }
        }
        div:last-child{
            display: flex;
            align-items: center;
            a {
                display: flex;
                align-items: center;
                img{
                    width: 25px;
                }
                margin-right: 15px;
            }
            a:hover{
                animation: graps 0.7s;
            }
        }
    }
    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: clamp(1.3rem, 1.4rem + 1vw, 2rem);
        display: flex;
        align-items: center;
        color: white;
    }

    a:nth-child(3n){
        margin: 20px 0px;
        padding: 10px 20px;
        font-family: Ubuntu, sans-serif;
        letter-spacing: 1.3px;
        font-size: 16px;
        font-weight: 600;
        text-decoration: none;
        color: white;
        width: 100%;
        max-width: 150px;
        background: #2F2E41;
        border-radius: 10px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid transparent;
        img{
            width: 30px;
        }
        :hover{
            background: #3F3E4A;
        }
        :focus{
            border: 2px solid white;
        }
    }

    @media(max-width: 780px){
        background-image: none;
        align-items: center;
        section{
            align-items: center;
            padding-bottom: 10px;
        }
        h1{
            text-align: center;
        }
    }
    @media(max-width: 500px){
        padding: 20px;
    }
    @media(max-width: 425px){
        section{
            width: 100%;
            justify-content: space-between;
            div:first-child{
                img{
                    width: 70px;
                }
                span{

                }
            }
            div:last-child{
                flex-direction: column;
                a{
                    margin-right: 0;
                }
                a:first-child{
                    margin-bottom: 10px;
                }
            }
        }
         a:nth-child(3n){
             margin: 0px;
             width: 100%;
             max-width: 200px;
         }
    }
`;
