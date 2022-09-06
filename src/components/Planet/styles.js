import styled from 'styled-components';

export const PlanetContainer = styled.li`
    width: 200px;
    height: 100vh;  
    border-radius: 50%;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    figure{
        margin: 0 auto;
        width: 100%;
        position: absolute;
        animation: planetAnimation 15s linear infinite;

        //animation: Terra 5s linear infinite;
        &.Mercúrio {
            animation-duration: 5s;
        }
        &.Vênus {
            animation-duration: 8s;
        }
        &.Terra {
            animation-duration: 12s;
        }
        &.Marte {
            animation-duration: 15s;
        }
        &.Júpiter {
            animation-duration: 18s;
        }
        &.Saturno {
            animation-duration: 21s;
        }
        &.Urano {
            animation-duration: 24s;
        }
        &.Netuno {
            animation-duration: 38s;
        }
            img {
            width: 100%;
            height: 100%;
            }
    }  
    @keyframes planetAnimation {
        0%{
            left: -15%;
            bottom: 0;
        }
        25%{
            left: 15%;
            bottom: 25%;
        }
        40%{
            left: 30%;
            bottom:40%;
        }
        60%{
            left: 30%;
            bottom:60%;
        }

        75%{
            left: 15%;
            bottom: 75%;
        }
        100%{
            left: -15%;
            bottom: 100%;
        }
    }
    @media (max-width: 650px) {
        min-height: 60px;
        width: 100vw;
        
        figure{
            min-height: 100%;
            max-width: 200px;
        }

        @keyframes planetAnimation{
          0%{
            left: -50%;
            top: -70%;
          }  
          25%{
            top: 25%;
          }  
          40%{
            top: 60%;
          }  
          45%{
            top: 70%;
          }  
          55%{
            top: 70%;
          }  
          60%{
            top: 60%;
          }  
          75%{
            top: 25%;
          }  
          100%{
            left: 100%;
            top: -70%;
          }   
        }
    }
`