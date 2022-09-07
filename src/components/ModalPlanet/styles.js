import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: fixed;
    overflow-y: scroll;
   
    .planet-modal-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        height: 90%;    
        font-family: 'Orbitron', sans-serif;   
    }

    .planet-modal-close{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 5%;
        width: 100%;
    }

    button{
        width: 15%;
        height: 60%;
        background: none;
        border: none;
        color: var(--Color-white);
    }

    button:hover{
        color: var(--Color-grey2);
    }

    .planet-modal-data{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: auto;
    }
    
    .planet-modal-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    figure{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2{
        width: 100%;
        height: 20%;
        text-align: center;
        font-size: 40px;
        /* margin-bottom: 8px; */
        font-family: 'Orbitron', sans-serif;
    }

    p{
        text-align: center;
        font-size: 25px;
        line-height: 30px;
        padding: 0px;
        font-family: 'Orbitron', sans-serif;
    }

    @media (min-width: 768px) {

        .planet-modal-box{
            height: 30%;
            max-width: 1200px;
        }
       
       .planet-modal-data{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
       } 

       .planet-modal-text{
            flex-direction: column;
            gap: 30px;
            width: 80%;
       }

       figure{
            width: 40%;
       }

       h2{
            height: 20%;
       }

       p{
        width: 80%;
       }
    }
`