import styled from "styled-components";

import notify from '../../global/assets/notify.svg';
import woman from '../../global/assets/womanotify.svg';

export const ContainerNotification = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${woman}) ;
    background-repeat: no-repeat ;
    background-position: left bottom;
    background-size: 50%;
    >img:first-child{
        width: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 9;
    }
    main{
        width: 100%;
        max-width: 700px;
        height: 100vh;
        margin: 0px auto;
        z-index: 11;
        padding: 70px 30px 30px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        article{
            h1{
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                font-size: 19px;
                line-height: 36px;
                color: #2F2E41;
                padding: 15px 0px;
                text-align: center;
                @media(max-width: 700px){
                    padding: 5px;
                }
            }
            >button{
                background: #FFFFFF;
                margin: 15px auto;
                border-radius: 10px;
                width: 90%;
                text-decoration: none;
                max-width: 200px;
                border: 1px solid transparent;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 20px;
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 22px;
                color: #000000;
                cursor: pointer;
                transition: all 0.4s;
                outline: none;
                :focus{
                    border: 1px solid #f00f53;
                }
                :hover{
                    background: #F2F2F2;
                }
            }
            margin: 10px auto;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-color: #FFB9CE ;
            padding: 10px;
            >div{
                border-radius: 10px;
                margin: 10px  auto;
                div:first-child{
                    padding: 5px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #FFFFFF;
                    border-radius: 10px 10px 0px 0px;
                    a:first-child{
                        display: flex;
                        align-items: center;
                        color: #F00F53;
                        text-decoration: none;
                        img{
                            width: 34px;
                            margin-right: 5px;
                        }
                        h3{
                            font-family: Ubuntu;
                            font-style: normal;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 16px;
                            color: #666666;
                        }
                        :hover{
                            text-decoration: underline;
                        }
                    }
                    span{
                        font-family: Open Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 19px;
                        color: #000000;
                    }
                }
                a:last-child{
                    display: flex;
                    justify-content: center;
                    background: rgba(255, 236, 242, 0.71);
                    border: 1px solid transparent;
                    transition: all 0.4s;
                    text-decoration: none;
                    border-radius: 0px 0px 10px 10px;
                    padding: 10px;
                    p{
                        font-family: Open Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 19px;
                        color: #3F3E4A;
                    }
                    :hover{
                        border: 1px solid #F00F53;
                    }
                }
                @media(max-width: 700px){
                    padding: 0px;
                }
            }
        }
        @media(max-width: 520px){
            height: 100%;
            width: 100%;
            background-color: #FFB9CE ;
            article{
                
            }
        }
        @media(max-width: 700px){
            padding: 10px 10px 60px 10px;
        }
    }
    @media(max-width: 700px){
        height: 100%;
    }
    >img:last-child{
        width: 30%;
        position: absolute;
        right: 0;
        bottom: 0;
    }
    @media(max-width: 950px){
        background-image: url();
        >img{
            display: none;
        }
    }
`;