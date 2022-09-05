import styled from 'styled-components';
import orbitron from '../../assets/orbitron.light.ttf'
import geo from '../../assets/Geo-Regular.ttf'

export const LoginStyle = styled.body`
  @font-face {
    font-family: 'orbitron';
    src: url(${orbitron});
  }
  @font-face {
    font-family: 'geo';
    src: url(${geo});
  }

  background-image: url(http://st.gde-fon.com/wallpapers_original/580996_prostranstvo_planeta_tma_svet_poverhnost_ochertani_5120x2880_www.Gde-Fon.com.jpg);
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


    #inColun{
      display: flex;
      flex-direction: row;
      margin-right: 9%;
      margin-top: 2%;
    }

    form{
      max-width: 346px;
      max-height: 140px;
      margin-left: 14%;
      display: flex;
      flex-direction: column;
      font-family: 'geo';
    }


    #textLogin{
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
    }

    .juncaoInputErr{
      min-height: 60px;
    }

    .labelForm{
      color: white;
      margin-top: 20px;
      font-size: 20px;
    }

    .mensageErr{
      color: #E83F5B;
      font-family: 'geo';
      font-size: 15px;
      margin-top: 1%;
    }

    #botaoLogin{
      background-color: white;
      color: black;
      width: 141px;
      height: 42px;
      border: none;
      border-radius: 20px;
      font-size: 20px;
      margin-top: 13%;
      font-family: 'orbitron';
    }

    #linha-vertical{
      height: 480px;
      border-right: 4px solid white;
      border-radius: 7px;
    
    }

    #textLogin2{
      display: flex;
      color: white;
      font-size: 30px;
      justify-content: center;
    }

    #logoLogin{
      margin-top: 3%;
    }

    #centralizarBotao{
      max-width: 346px;
      display: flex;
      justify-content: center;
    }
`;