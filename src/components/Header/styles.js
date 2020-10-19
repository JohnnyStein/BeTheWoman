import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 105px;
    background: #F00F53;

    .left {
        display: flex;
        align-items: center;
    }

    .left img {
        width: 77px;
    }

    .left h1 {
        font-family: Poppins;
        font-size: 20x;
        font-weight: 700;
        color: #FFDBE6;
    }

    .right a {
        margin-right: 60px;
    }
`