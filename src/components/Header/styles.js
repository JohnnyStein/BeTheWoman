import styled from 'styled-components';

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    background: #F00F53;
    position: fixed;
    z-index: 9;
    @media(max-width: 700px){
        bottom:  0;
    }
    div:first-child{
        display: none;
        @media(max-width: 700px){
            display: block;
        }
    }
    section {
        display: flex;
        align-items: center;
        img {
            transition: all 0.4s;
            width: 50px;
            cursor: pointer;
            :hover{
                opacity: 0.8;
            }
            @media(max-width: 700px){
                display: none;
            }
        }
        span {
            font-family: Poppins;
            font-size: 15px;
            font-weight: 600;
            color: #FFDBE6;
        }
    }
    article{
        display: flex;
        align-items: center;
        >a{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border-radius: 5px;
            margin-left: 25px;
            transition: all 0.4s;
            img{
                width: 24px;
                :hover{
                    animation: graps 0.4s;
                }
            }
        }
    }
    div:last-child{
        img{
            margin-left 30px;
            width: 33px;
        }
    }
`