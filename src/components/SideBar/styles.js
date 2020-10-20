import styled from 'styled-components';

export const SidebarComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFDBE6;
    grid-area: b;
    padding: 70px 10px 10px 10px;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 1;
    header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1 {
            font-family: Noto Sans;
            text-align: center;
            color: #F50057;
            font-weight: 700;
        }
        div:last-child{
            display: flex;
            input{
                width: 90%;
                height: 55px;
                background: #FEF4F4;

                border: none;
                border-radius: 10px;

                padding: 20px;
                font-size: 16px;
                font-weight: 700;
                :hover {
                    padding: 18px;
                    border: 2px solid #F50057;
                    background: #FEF4F4;
                }
            }
        }
    }
    footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;

        h1 {
            font-family: Ubuntu;
            font-size: 19px;
            font-weight: 700;
            color: #F50057;
    
            margin-bottom: 2px;
        }
        div{
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-top: 30px;
            p {
                margin-left: 10px;
        
                font-family: Ubuntu;
                font-weight: 700;
                font-size: 16px;
            }
        }
    }

`;