import styled from 'styled-components';

export const HeaderContainer = styled.aside`
    min-width: 100vw;
    height: 50px;
    padding: 0 5%;

    gap: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(22, 22, 22, 0.95);

  

    .header_div-logo {
        width: 25%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        svg{
        height: 100%;
        width: 300px;
    }
    };

    .header_div-extra {
        height: 100%;
        width: 20%;
        min-width: fit-content;

        gap: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-end;
        svg{
            height: 30px;
            width: 30px;
            cursor: pointer;
        }
    }

    @media(min-width: 1024px){

        .header_div-logo {
            width: 20%;
            max-width: none;;
            height: 60%;
        };

        button {
            width: 30%;
            max-width: none;

            height: 40%;
            max-height: 65px;
        }
    }
    @media(max-width: 500px){
        .header_div-logo{
            display: none;
        }
        .header_div-extra{
            width: 100%;
            justify-content: space-evenly;
        }
    }
    ;
`