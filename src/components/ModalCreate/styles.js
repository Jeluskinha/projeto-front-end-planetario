import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
    position: fixed;

    background-color: rgba(1, 1, 1, 0.7);

        form {
            width: 90%;
            min-width: 288px;
            max-width: 500px;
            
            height: fit-content;
            min-height: 350px;

            border-radius: 8px;
            padding: 15px;

            gap: 20px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;

            background-color: var(--Color-blue-2);

            button {
                width: 100%;

                border: unset;
                outline: unset;
                background-color: unset;

                text-align: end;

                color: var(--Color-white);
                font-size: 2.2rem;
                font-weight: 500
            }

            button:hover {
                color: var(--Color-especial);
            }

            .btn-close {
                width: 25px;
                height: 25px;

                z-index: 1;
                position: absolute;
                align-self: flex-end;
            }

            div {
                width: 100%;
                height: max-content;

                gap: 15px;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: flex-start;

                label {
                    color: var(--Color-white);
                    font-size: 2.2rem;
                    font-weight: 500
                }

                input, textarea {
                    width: 100%;
                    min-width: 100%;
                    max-width: 100%;

                    height: max-content;
                    padding: 10px 10px;

                    color: var(--Color-black);
                    font-size: 1.5rem;
                    font-weight: 400;
                    word-wrap: break-word;

                    border: unset;
                    outline: unset;
                    border-radius: 8px;
                    background-color: var(--Color-grey-1);
                }

                input::placeholder, textarea::placeholder {
                    color: var(--Color-grey-2);
                    font-size: 1.5rem;
                    font-weight: 500;
                }

                textarea {
                    min-height: 162px;
                    max-height: 360px;

                    overflow: auto;
                }
            }
        }
`
