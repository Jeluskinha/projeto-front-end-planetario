import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 10%;
    min-height: 45px;

    padding: 0 5%;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: rgba(22, 22, 22, 0.95);

    .header_div-logo {
        width: 50%;
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