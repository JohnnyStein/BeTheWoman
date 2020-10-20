import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 70px;
    overflow-y: auto;
    background: #f4f4f4;
    overflow-x: hidden;
`;
export const Grid = styled.div`
    display: flex;
    div:first-child{
        width: 80vw;
    }
    div:last-child{
        width: 20vw;
    }
`;