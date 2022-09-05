import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10%;
    min-height: 45px;

    padding: 0 5%;

    gap: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(22, 22, 22, 0.95);

    button {
        width: 18%;
        min-width: 25px;
        max-width: 35px;

        height: 50%;
        min-height: 25px;
        max-height: 35px;
            
        border: 0;
        background-color: unset;
    }

    .button-menu {
        width: 40%;
        max-width: 50px;
    }

    .header_div-logo {
        width: 40%;
        min-width: 200px;
        max-width: 220px;
        height: 100%;

        display: flex;
        justify-content: flex-start;
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
    }

    .header_div {
        width: 50%;
        max-width: 180px;
        height: 100%;

        gap: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
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
    };
`