import styled from 'styled-components';

export const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    
    width: 100%;
    height: 100vh;

    .post-container {
        width: 95%;
        height: 219px;
        background: #FFDBE6;
        border-radius: 40px;
        margin-top: 50px;

        padding: 25px;
    }

    .post-container .top {
        display: flex;
        justify-content: space-between;
    }

    .post-container .top h1 {
        font-family: Poppins;
        font-size: 25px;
        font-weight: 700;
        color: #3C3C3C;
    }

    .post-container .top .name-placeholder {
        display: flex;
        align-items: center;
    }

    .post-container .top .name-placeholder p {
        margin-right: 10px;

        font-family: Ubuntu;
        font-weight: 700;
        font-size: 22;
    }

    .post-container .description {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 25px;

        margin-top: 40px;
    }
`;