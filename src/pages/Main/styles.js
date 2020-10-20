import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    padding-top: 70px;
    overflow-y: auto;
    background-color: #f4f4f4;
    background-image: url(https://c4.wallpaperflare.com/wallpaper/303/914/545/montanhas-black-and-white-mountain-wallpaper-preview.jpg);
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