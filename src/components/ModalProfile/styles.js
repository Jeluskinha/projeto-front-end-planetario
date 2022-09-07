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

    .modal-profile{
        width: 90%;
        min-width: 288px;
        max-width: 310px;
        
        height: 30%;
        min-height: 180px;
        max-height: 212px;

        border-radius: 8px;
        padding: 15px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--Color-blue-2);

        h3 {
            width: 70%;
            height: 20%;

            color: var(--Color-white);
            font-size: 2rem;
            font-weight: 500;
            font-family: 'Geo', sans-serif;

            display: flex;
            align-items: center;
        };

        .profile_picture {
            width: 65px;
            height: 65px;

            align-self: flex-end;
           
            position: absolute;

            img {
                width: 100%;
                height: 100%;
                border-radius: 15%;
            }
        }

        section {
            width: 100%;
            height: 70%;

            display: flex;
            align-items: flex-start;
            flex-direction: row;
        
            .profile_info {
                width: 100%;
                height: 100%;
    
                gap: 10px;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: space-evenly;

                div {
                    gap: 10px;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: flex-start;
    
                    figure {
                        width: 30px;
                        height: 30px;

                        border-radius: 50%;
                        background-color: var(--Color-grey-1);

                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    span {
                        color: var(--Color-white);
                        font-size: 1.6rem;
                        font-weight: 400;
                        font-family: 'Geo', sans-serif;
                    }
                }
            }
            
            button {
                align-self: flex-end;
                justify-self: flex-end;

                border: unset;
                outline: unset;
                background-color: unset;

                display: flex;
                align-items: flex-end;
                justify-content: flex-end;
            }
        }

    }

`