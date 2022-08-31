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
        width: 100%;
        height: 90%;

        ul {
            width: 100%;
            height: max-content;

            padding-bottom: 25px;
        
            gap: 20px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
        
            overflow: auto;
            
            list-style: none;
        };
        
        section {
            width: 100%;
            height: 50.5%;

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
        }
    }
`