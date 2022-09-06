import styled from "styled-components";

export const BlogContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;

    gap: 5%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    background-image: url('https://ddef9a920b.cbaul-cdnwnd.com/410061e8baf0812f1c98c5e978dbf3fc/200000063-800498004c/wallpaper-2701715.jpg?ph=ddef9a920b');
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;

    overflow: auto;

    &&::-webkit-scrollbar {
        width: 0px;
    }

    main {
        width: 100%;
        height: 85%;
        padding: 2% 5% 5% 5%;

        gap: 9%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;

        .div-createPost {
            width: 100%;
            min-width: 288px;
            max-width: 713px;

            height: 8%;
            min-height: 40px;
            max-height: 90px;

            padding: 10px 2%;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

            border-radius: 8px;
            background-color: var(--Color-grey-1);

            p {
                color: var(--Color-grey-2);
                font-size: 1.6rem;
                font-weight: 600;
                font-family: 'Geo', sans-serif;
            };

            button {
                width: 30px;
                height: 30px;

                border: unset;
                outline: unset;

                background-color: unset;
            };

        };

        ul {
            width: 100%;
            min-width: 288px;
            max-width: 713px;

            padding-bottom: 40px;

            height: fit-content;

            gap: 30px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
        }
    }

`

