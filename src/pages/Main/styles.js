import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 70px;
    overflow-y: auto;
    background: #f4f4f4;
    overflow-x: hidden;
    @media(max-width: 700px){
        padding-top: 20px;
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