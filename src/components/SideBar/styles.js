import styled from 'styled-components';

export const SidebarComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 376px;
    background: #FFDBE6;
    height: 100vh;

    padding: 30px;

    .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 160px;
    }

    .top h1 {
        font-family: Noto Sans;
        text-align: center;
        color: #F50057;
        font-weight: 700;
    }

    .top .input-search {
        display: flex;
    }

    .top .input-search input {
        width: 334px;
        height: 55px;
        background: #FEF4F4;

        border: none;
        border-radius: 10px;

        padding: 20px;
        font-size: 16px;
        font-weight: 700;
    }

    .top .input-search input:hover {
        padding: 18px;
        border: 2px solid #F50057;
        background: #FEF4F4;
    }

    .top .input-search img {
        position: absolute;
        top: 250px;
        right: 40px;
    }

    .bottom {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    }

    .bottom h1 {
        font-family: Ubuntu;
        font-size: 19px;
        font-weight: 700;
        color: #F50057;

        margin-bottom: 2px;
    }

    .bottom .suggestionContainer {
        display: flex;
        align-items: center;
        margin-left: 20px;

        margin-top: 30px;
    }

    .bottom .suggestionContainer p {
        margin-left: 10px;

        font-family: Ubuntu;
        font-weight: 700;
        font-size: 16px;

    }
`;