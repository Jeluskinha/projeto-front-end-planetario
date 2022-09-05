import styled from 'styled-components';

export const PostContainer = styled.li`
    width: 100%;

    height: fit-content;
    min-height: 135px;

    padding: 10px 2%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 8px;
    background-color: rgba(var(--Color-blue-1), 0.2);

    header {
        width: 100%;
        height: fit-content;

        gap: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        h3 {
            width: 70%;

            word-wrap: break-word;

            color: var(--Color-white);
            font-size: 1.9rem;
            font-weight: 600;
            font-family: 'Geo', sans-serif;
        }

        div {
            width: 55px;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

            button {
                width: 22px;
                height: 22px;
    
                border: unset;
                outline: unset;
    
                background-color: unset;
            }
        }
    };

    section {
        width: 100%;
        height: 50px;

        gap: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;

        img {
            width: 50px;
            height: 50px;
        }

        div {
            height: 100%;
            width: max-content;

            gap: 5px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;

            h4 {
                color: var(--Color-white);
                font-size: 1.8rem;
                font-weight: 500;
                font-family: 'Geo', sans-serif;
            };

            span {
                color: var(--Color-white);
                font-size: 1.6rem;
                font-weight: 400;
                font-family: 'Geo', sans-serif;
            }
        }
    }

    p {
        width: 100%;
        height: fit-content;

        word-wrap: break-word;

        color: var(--Color-white);
        font-size: 1.5rem;
        font-weight: 400;
        font-family: 'Geo', sans-serif;
    }
`