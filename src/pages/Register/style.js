import styled from 'styled-components';
import orbitron from '../../assets/orbitron.light.ttf'
import geo from '../../assets/Geo-Regular.ttf'

export const RegisterStyle = styled.body`
  @font-face {
    font-family: 'orbitron';
    src: url(${orbitron});
  }
  @font-face {
    font-family: 'geo';
    src: url(${geo});
  }

  background-image: url();
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;

    #inColun{
      display: flex;
      flex-direction: row;
      margin-right: 9%;
      margin-top: 2%;
    }

    form{
      max-width: 346px;
      margin-left: 14%;
      display: flex;
      flex-direction: column;
      max-height: 450px;
      font-family: 'geo';
    }




    #textRegister{
      color: white;
      font-size: 30px;
      min-width: 480px;
      max-width: 480px;
      max-height: 313px;
      margin-top: 14%;
      font-family: 'orbitron';
    }

    .inputForm{
      width: 346px;
      height: 50px;
      border-radius: 30px;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      font-size: 20px;
      padding: 4%;
      margin-top: 2%;
      font-family: 'geo';
    }

    .juncaoInputErr{
      min-height: 60px;
    }

    .labelForm{
      color: white;
      margin-top: 20px;
    }

    .mensageErr{
      color: #E83F5B;
      font-family: 'geo';

    }

    #botaoRegistrar{
      background-color: white;
      color: black;
      width: 141px;
      height: 42px;
      border: none;
      border-radius: 20px;
      font-size: 20px;
      margin-top: 6%;
      font-family: 'geo';
    }

    #linha-vertical{
      height: 480px;
      border-right: 4px solid white;
      border-radius: 7px;
    
    }

    #textCadastro{
      display: flex;
      color: white;
      font-size: 30px;
      justify-content: center;
    }

    #logoRegister{
      margin-top: 3%;
    }

    #centralizarBotao{
      max-width: 346px;
      display: flex;
      justify-content: center;
    }

    .option{
      background-color: pink;
      color: black;
      }
`;
