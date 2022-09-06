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
  background-color: black;


    #inColun{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    form{
      max-width: 346px;
      margin-left: 14%;
      display: flex;
      flex-direction: column;
      font-family: 'geo';
      max-height: 325px;
    }


    #textLogin{
      color: white;
      font-size: 30px;
      min-width: 480px;
      max-width: 480px;
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

    .inputErrorFunction{
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

    #buttonLogin{
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

    #verticalLine{
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

    #soonLogin{
      margin-top: 3%;
    }

    #centerButton{
      max-width: 346px;
      display: flex;
      justify-content: center;
    }

    #spanLogin{
      
      font-size: 15px;
      text-align: center;
    }

    #centerSpan{
      margin-top: 5%;
      display: flex;
      justify-content: center;
    }

    @media (max-width: 960px){

  background: url(https://i.ibb.co/DVsLyx6/Wallpaper-da-lua-1lua.jpg);
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  background-color: black;
  justify-content: center;
  align-items: center;

  #textLogin{
    display: none;
  }

  #verticalLine{
  display: none;
  }

  #soonLogin{
      margin-top: 20%;
    }

  form{
    max-width: 346px;
    display: flex;
    font-family: 'geo';
    max-height: 100%;
    margin-right: 14%;
    margin-top: 60%;
    }

    #justifyCellPhone{
      display: flex;
      justify-content: center;
      align-items: center;
    }


}

   @media (max-width: 600px){

    background: url(https://i.ibb.co/DVsLyx6/Wallpaper-da-lua-1lua.jpg);
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    background-color: black;

    
    #textLogin{
      display: none;
    }

    #verticalLine{
    display: none;
    }

    form{
    display: flex;
    font-family: 'geo';
    display: flex;
    }

    #soonLogin{
     display: none;

    }

    #justifyCellPhone{
    max-height:40% ;
      margin-bottom: 40%;
    }


   }
`;