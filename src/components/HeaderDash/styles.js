import styled from 'styled-components';

export const HeaderContainer = styled.aside`
    min-width: 100%;
    min-height: 50px;
    max-height: 50px;
    padding: 0 0.2% 0 5%;

    gap: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    z-index: 50;
    position: absolute;

    background-color: rgba(22, 22, 22, 0.95);

    button{
        width: 18%;
        min-width: 25px;
        max-width: 35px;

        height: 50%;
        min-height: 25px;
        max-height: 35px;
            
        border: 0;
        background-color: unset;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
                
                max-height: 25px;
            }
    }

    h3{
        width: fit-content;
        padding: 0 15px;
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
        justify-content: space-between;
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
        min-height: 65px;
        padding-left: 7%;

        .header_div-logo {
            width: 30%;
            height: 60%;
            max-width: 225px;
        };

        button {
            width: 30%;
            max-width: none;

            height: 40%;
            max-height: 65px;
        }

    };

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