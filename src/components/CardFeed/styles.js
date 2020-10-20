import styled from 'styled-components';

export const CardContainer = styled.section`
    width: 100%;
    background: #FFDBE6;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    max-width: 700px;
    border: 1px solid transparent;
    transition: all 0.4s;
    margin: 0px auto;
    
    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media(max-width: 425px){
            align-items: center;
            h1{
                text-align: center;
            }
            p{
                text-align: justify;
            }
        }
        a{
            text-decoration: none;
            h1{
                font-family: Poppins;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                color: #3C3C3C;
                margin: 5px;
            }
            p{
                font-family: Open Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                margin: 15px 5px 5px 5px;
                letter-spacing: 0.007em;
                color: #303030;
            }
        }
    }
    article{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 5px;
        div{ 
            display: flex;
            align-items: center;    
            width: auto!important;
            transition: all 0.5s;
            
            a{
                p{
                    font-family: Ubuntu;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 25px;
                    color: #666666;
                    margin-left: 5px;
                    :hover{
                        text-decoration: underline;
                    }
                }
                img{
                    width: 35px;
                }
            }
        }
        a{
            display: flex;
            cursor: pointer;
            align-items: center;
            img{
                width: 25px;
            }
        }
    }
    :hover{
        border: 1px solid #F00F53;
    }
`;