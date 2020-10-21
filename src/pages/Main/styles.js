import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: -1px -1px 5px 0px rgba(0,0,0,0.75);
    height: 100vh;
    padding-top: 70px;
    overflow-y: auto;
    background-color: #FFFFFF;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    @media(max-width: 700px){
        padding-top: 20px;
        padding-bottom: 70px;
    }
    
`;
export const Grid = styled.div`
    display: flex;
    div:first-child{
        width: 75vw;
        @media(max-width: 700px){
            width: 100vw;
        }
    }
    div:last-child{
        width: 25vw;
    }
`;