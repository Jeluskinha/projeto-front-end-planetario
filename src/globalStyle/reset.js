import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --Color-red: rgba(217, 20, 20, 1);
      --Color-white: rgba(255, 255, 255, 1);
      --Color-black: rgba(0, 0, 0, 1);

      --Color-grey-1: rgba(249, 248, 255, 0.81);
      --Color-grey-2: rgba(85, 85, 85, 1);
      --Color-grey-3: rgba(22, 22, 22, 9.5);

      --Color-blue-1: 102, 147, 231;
      --Color-blue-2: rgba(38, 52, 79, 1);
      --Color-blue-3: rgba(59, 77, 114, 1);

      --Color-success: rgba(81, 189, 101, 1);
      --Color-error: rgba(253, 80, 80, 1);
      --Color-focus: rgba(53, 135, 230, 1);
      --Color-especial: rgba(82, 0, 255, 1);

      font-size: 60%;   
  }

  @media (min-width: 1024px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Geo', sans-serif;
  }

  body, html{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    color: var(--Color-white);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-size: 1.6rem;
    font-weight: 500;
    font-family: 'Orbitron', sans-serif;
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
    margin: 1rem;
    background: var(--Color-grey-1);
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--Color-grey-2);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--Color-grey-2);
  }
`;
export default GlobalStyle 