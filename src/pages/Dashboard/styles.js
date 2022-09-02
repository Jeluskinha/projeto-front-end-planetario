import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background-image: url('https://premiumcoding.com/wp-content/uploads/2014/02/space-background1.png');
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;

    overflow: auto;

    header {
        width: 100%;
        height: 10%;
        min-height: 45px;

        padding: 0 5%;

        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;

        button {
            border: none;
            background-color: unset;
        }
    }

    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        div{
            min-height: 100%;  
            width: 10%;
            display: flex;
            align-items: center;
            figure{
                height: 100%;
                width: 400px;
                left: 0px;
                display: flex;
                align-items: center; 
                z-index: 1;
                position: absolute;
                left: -220px;
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
            width: 90%;
            height: max-content;
            justify-content: flex-end;

            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
        
            overflow: auto;
            
            list-style: none;
            position: relative;
        };
        
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
    }
`