import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background-image: url('https://i.pinimg.com/originals/29/bd/dd/29bddd30d3ddde8f3ea6ac017e33f95b.jpg');
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;

    span{
        background-color: green;
    }


    main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;

        #header{
            min-width: 100vw;
            z-index: 50;
            position: absolute;

            button {
            height: 50px;
            width: 50px;
            z-index: 1;
            right: 0;
            position:fixed;
            border: none;
            background-color: transparent;
            }
        }
        div{
            min-height: 100%;  
            width: 10%;
            display: flex;
            align-items: center;
            z-index: 1;
            #sun__dashboard{
                height: 100%;
                width: 400px;
                display: flex;
                align-items: center; 
                z-index: 1;
                position: absolute;
                left: -220px;
                bottom: 0px;
                flex-shrink: 1;
                img{
                    height: 101%;
                    width: 100%;
                    border-radius: 0 60% 60% 0;
                }
            }
        }
        ul {
            min-height: 100%;
            min-width: 90%;
            height: max-content;
            right: 0;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;

        
            overflow: auto;
            
            list-style: none;
            position: relative;
        };

        @media (max-width: 1250px) {
            #sun__dashboard{
                min-height: 95%;
                max-width: 380px;
            }
        }
        @media (max-width: 1100px) {
            #sun__dashboard{
                max-height: 85%;
                max-width: 360px;
            }
        }
        @media (max-width: 950px) {
            #sun__dashboard{
                max-height: 80%;
                max-width: 340px;
            }
        }
        @media (max-width: 800px) {
            #sun__dashboard{
                max-height: 75%;
                max-width: 320px;
            }
        }
        // troca de layout a partir daqui
        @media (max-width: 650px) {
            h3{
            font-size: 1.2rem;
            }
            main{
                display: flex;
                flex-direction: column;
            }
                #sun__dashboard--box{
                    display: flex;
                    min-height: 30%;
                    height: 100px;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: translateY(${props => -props.count}px);
                    #sun__dashboard{
                        position: absolute; 
                        z-index: 5000;      
                        min-height: 80%;
                        min-width:  100%;
                        left: 0px;
                        bottom: 0px;
                        img{
                            min-height: 100%;
                            min-width: 100%;
                            position: fixed;
                            top: -70%;  
                        }
                    }
                }
                ul{
                    margin-top: 100px;
                    height: 100%;
                    flex-direction: column;
                    overflow: scroll;
                    overflow-x: hidden;
                    gap: 10rem;
                    &::-webkit-scrollbar { // aqui estou setando a barra scrool com 0 px para não aparecer na tela
                    width: 0px;
                    }
                }
        }
    }
`

/* section {
            width: 100%;
            height: 50.5%;
            display: none;

            padding: 5% 3%;
        
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
        
            background-color: rgba(0, 0, 0, 0.6);
        
            .header_description {
                width: 100%;
                height: 20%;
        
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
        
                h1 {
                    color: white;
                    font-size: 4rem;
                }
            };
        
            div {
                width: 100%;
                height: 80%;
        
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
        
                p {
                    width: 100%;
                    height: 90%;

                    padding: 5px 5px 0 5px;
            
                    display: flex;
                    align-items: center;
            
                    color: white;
                    font-size: 1.5rem;
            
                    text-align: center
                };
            
                span {
                    width: 100%;
                    height: 10%;
                    
                    padding: 5px 5px 0 5px;
            
                    color: white;
                    font-size: 1.2rem;
        
                    text-align: center;
                }
            }
        } */