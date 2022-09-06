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

    .modal_delete {
        width: 90%;
        min-width: 288px;
        max-width: 400px;
        
        height: 30%;
        min-height: 250px;
        max-height: 300px;

        border-radius: 8px;
        padding: 20px;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        background-color: var(--Color-blue-2);

        .delete_info {
            width: 100%;
            height: 70%;

            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            figure {
                width: 50px;
                height: 50px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 4px;
                background-color: var(--Color-blue-3)
            };
            
            h4, p {
                width: 100%;
                text-align: center;

                font-size: 1.8rem;
                font-weight: 500;
                font-family: 'Geo', sans-serif;
            }

            p {
                font-size: 1.5rem;
                font-weight: 400;
            }   
        }

        .delete_btns {
            width: 100%;
            height: 23%;
            border-top: 3px solid var(--Color-blue-3);

            gap: 15px;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;

            button {
                width: max-content;
                height: 30px;
                padding: 0 15px;

                border: unset;
                outline: unset;
                border-radius: 6px;

                color: white;
                font-size: 1.6rem;
                font-weight: 500;
            }

            #button-cancel {
                background-color: var(--Color-red);
            }

            #button-cancel:hover {
                background-color: #9d0208;
            }

            #button-delete {
                background-color: var(--Color-blue-2);
            }

            #button-delete:hover {
                background-color: var(--Color-focus);
            }
        }
    }
`