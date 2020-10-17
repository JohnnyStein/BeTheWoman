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

export const SecondLanding = styled.section`
    width: 100%;
    height: 100%;
    margin-top:60px;
    justify-content: space-between;

    #firstSection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-itens: space-between;
        align-content: space-between;
    }

    #firstSection h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: clamp(1.3rem, 1.4rem + 1vw, 2rem);
        display: flex;
        align-items: center;
        color: #F50057;

        text-align: right;

        margin-left: 30%;
    }

    #secondSection {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-itens: space-between;
        align-content: space-between;
        margin-bottom: 50px;
    }

    #secondSection h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: clamp(1.3rem, 1.4rem + 1vw, 2rem);
        display: flex;
        align-items: center;
        color: #F50057;

        text-align: left;

        margin-right: 35%;
    }

    @media(max-width: 780px) {
        height: 100vh;
        margin-top: 5px;
        img {
            width: 230px
        }

        #firstSection {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
        }

        #firstSection h1 {
            margin: 0px;
            margin-bottom: 10px;
            text-align: center;
            margin-bottom: 20px;
            font-size: 20px;
        }

        #secondSection {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #secondSection img {
            margin-left: 45px;
        }

        #secondSection h1 {
            margin: 0px;
            margin-bottom: 10px;
            text-align: center;
            margin-top: 50px;
            font-size: 20px;
        }
    }
    @media(max-width: 500px){
        padding: 20px;
    }
`;

export const ThirdLanding = styled.section`
    width: 100%;
    height: 280px;

    display: flex;
    justify-content: center;

    background: #F50057;

    h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: 39px;
        display: flex;
        align-items: center;
        color: #FFF;

        text-align: center;
    }

    @media(max-width: 780px) {
        height: 150px;
        margin-top: 150px;

        h1 {
            font-size: 20px;
        }
    }
`;

export const FourthLanding = styled.section`
    width: 100%;
    height: 100%;
    margin-top:60px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px;

    #textWithButton #linkContainer {
        background: #3F3E4A;
        width: 100px;
        height: 70px;
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 90px;
    }

    #textWithButton img {
        width: 30px;
    }

    #textWithButton h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        display: flex;
        align-items: center;
        color: #F50057;

        text-align: left;
    }

    #woman-with-phone {
        width: 546px;
        height: 665px;
    }
    @media(max-width: 780px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-top: -100px;
        padding: 0;
        padding-bottom: 30px;

        #textWithButton {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #textWithButton h1 {
            font-size: 27px;

            text-align: center;
        }

        #textWithButton #linkContainer {
            margin-top: 40px;
        }

        #woman-with-phone {
            width: 240px;

            margin-bottom: -100px;
        }
    }
`;