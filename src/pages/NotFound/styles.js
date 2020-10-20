import styled from 'styled-components';

import notfound from '../../global/assets/notfound.svg';

export const ContainerFound = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${notfound});
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: center;
    @media(max-width: 700px){
        background-size: 95%;
        background-position-x:  center;
        background-position-y: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        a{
            position: absolute;
            top: 0;
            margin: auto;
        }
    }
    a{        
        position: absolute;
        bottom: 20px;
        left: 50%;
        display: flex;
        align-items: center;
        font-family: Ubuntu, sans-serif;
        font-size: 17px;
        text-decoration: none;
        color: #2F2E41;
        :hover{
            text-decoration: underline;
        }
        img{
            width: 34px;
            margin-right: 10px;
        }
    }
`;