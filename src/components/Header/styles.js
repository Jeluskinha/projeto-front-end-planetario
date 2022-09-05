import styled from 'styled-components';

export const HeaderContainer = styled.aside`
    min-width: 100%;
    min-height: 50px;
    padding: 0 5%;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(22, 22, 22, 0.95);

    .header_div-logo {
        width: 20%;
        height: 100%;
    };

    .header_div-extra {
        width: 50%;
        height: 100%;

        padding-left: 5%;

        gap: 3%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-end;
    };
`