import styled from 'styled-components';

export const SidebarComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFDBE6;
    padding: 70px 20px 10px 20px;
    position: fixed;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    width: 100%;
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 1;
    @media(max-width: 700px){
        display: none;
    }
    hr{
        width: 100%;
        border: 1px;
        background: red;
    }
    header{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        span {
            font-family: Poppins;
            font-weight: 600;
            font-size: 20px;
            padding: 5px;
            line-height: 35px;
            text-align: left;
            color: #F50057;
            font-weight: 600;
        }
        p{
            font-family: Noto Sans, sans serif;
            font-weight: 500;
            font-size: 17px;
            padding: 5px 10px;   
        }
        input{
            width: 80%;
            max-width: 370px;
            margin: 30px auto;
            padding: 10px 13px;
            border-radius: 5px;
            border: 2px solid transparent;
            font-family: Noto Sans;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
            outline: none;
            color: #666666;
            transition: all 0.4s;
            :focus{
                border: 2px solid #F50057;
            }
        }
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 10px;

        h1 {
            font-family: Ubuntu;
            font-size: 18px;
            font-weight: 700;
            color: #F50057;
    
            margin-bottom: 2px;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 20px;
            a {       
                font-family: Ubuntu;
                font-weight: 500;
                text-decoration: none;
                font-size: 16px;
                color: #666666;
                :hover{
                    text-decoration: underline;
                }
            }
        }
    }

`;