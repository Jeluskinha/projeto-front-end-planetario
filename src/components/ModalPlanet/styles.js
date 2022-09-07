import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    position: fixed;
    overflow-y: scroll;
    .planet-modal-box{
        width: 90%;
        height: fit-content;
        display: flex;
        align-items: center;
        flex-direction:column;
        justify-content: center;
        position: fixed ;
        font-family: 'Orbitron', sans-serif;
    }
    button{
        width: 30px;
        height: 30px;
        color: var(--Color-white);
        border: none;
        background: none;
        top: 0;
        right: 0;
        position: relative;
        z-index: 1;
        position: absolute;
        align-self: flex-end
    }
    button:hover{
        color: var(--Color-grey2);
    }
    .planet-modal-data{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .planet-modal-text{
        padding: 15px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    figure{
        height: 70%;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
    h2{
        width: 100%;
        height: 20%;
        font-size: 2.5rem;
        text-align: center;
        font-family: 'Orbitron', sans-serif;
    }
    p{
        padding: 0px;
        text-align: center;
        font-size: 1.3rem;
        line-height: 30px;
        font-family: 'Orbitron', sans-serif;
    }
    @media (min-width: 650px) {
        .planet-modal-box{
            height: fit-content;
            max-width: 1200px;
            flex-direction: row;
        }
       .planet-modal-data{
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
       }
       .planet-modal-text{
           gap: 30px;
           width: 80%;
           padding: 0;
           flex-direction: column;
       }
       figure{
            width: 40%;
       }
       h2{
            height: 20%;
            font-size: 3rem;
       }
       p{
        width: 80%;
        font-size: 1.7rem;
       }
       button {
        right: 20px
       }
    }
`