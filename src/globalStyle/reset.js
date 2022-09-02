import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --Blue-3: #4169e1;
    --Blue-2: #056CF2;
    --Blue-1: #05AFF2;
    --Blue-background:  rgb(5, 175, 242, 0.1);
    --Blue-background2:  rgb(5, 175, 242, 0.5);
    --Brown-4: #c98644;
    --Brown-3: #d1aa84;
    --Brown-2: #dbc4ad;
    --Brown-1: #F2E7DC;
    --Green-3: #027373;
    --Green-2: #038C7F;
    --Green-1: #A9D9D0;
    --Green-background:  rgb(63, 232, 100, 0.1);
    --Green-background2:  rgb(63, 232, 100, 0.5);
    --Color-primary:#FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;
    --White: #FFFFFF;
    --Grey-4: #121214;
    --Grey-3: #212529;
    --Grey-2: #343B41;
    --Grey-1: #868E96;
    --Grey-0: #F8F9FA;
    --Grey-background:  rgb(134, 142, 150, 0.1);
    --Grey-background2:  rgb(134, 142, 150, 0.5);
    --Sucess: #3FE864;
    --Negative: #E83F5B;
    --fontInter: url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;700&family=Inter:wght@100;200;300;400;500;600;700;800&family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;1,500&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');
      
    
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: var(--fontInter);
  }

  body,html{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
export default GlobalStyle 