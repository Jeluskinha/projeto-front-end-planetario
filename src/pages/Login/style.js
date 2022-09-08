import styled from 'styled-components';
import orbitron from '../../assets/orbitron.light.ttf'
import geo from '../../assets/Geo-Regular.ttf'
import { ToastContainer } from 'react-toastify';

export const LoginStyle = styled.div`
  @font-face {
    font-family: 'orbitron';
    src: url(${orbitron});
  }
  @font-face {
    font-family: 'geo';
    src: url(${geo});
  }
  height: 100vh;
  background-image: url('https://lh3.googleusercontent.com/DJI7Cmnj6k0eBimWNq3BNy_6bi1MA6_52q0SwIC8PJVfdQlxdhDNKjKPM2yTsFQcZkRmb1Lh-buCXNJpcZY_J-6CvftXAglWF5X73NMUFxJ-8JPWR73rscHzMUbqDtWPD_eTnFZQBmWC4_CVXZeIt-f03PwknyOxeEjQ_pmJxsViYcggnWBWYJMv67eWJdNXQUuTLyYAB6F0uz5-ML5-Spfdu-PZzoIxdunaKQ4DmURPkmIx842d9zMlpE-d78oqgHoFBIv4e2Sb6sTKVjHZ3j2UVigAhJC0UVB8aRD5RycTVE0QbKcjvCRcxxNAmZUF_XlXYcV5Hd-j0kAzF7c-IdWDsCk0-Tto9xjZO6R_C7PpkJpMjaYvcWpMJTjtSoKHnjq_0QwMclCQRI3O6f_e7h-tBfEsCzDhHTxCAhYGRQaQC9TI5Pzv4CpNytjiGd-947PvCddwXLD3x7ZgFeq-rp1QkNxlAq7H9VPEm3ORKZn6hvH-FFzBTFKwrYEsxXgeE67KiDhAgeEOvv-st70XRjFUGyPONLSJ1FowuRqy-XRH-5GS6EkaFL2EYt52q7HL6m8fwFestpRX7ykop7Rl9o2fIUPFnOrVA-I7xu1tWfd7MKEXMS0nf8VvWJ7VL6lqjQE_wTOPpJU4GpopVD2dQK2bcgXBvPVVOIVCxU2cYGb_7ZowamHQnXyHk3iyIU44snRc8RmnaeF8u7pS2kr7QOBoGAgGBATR2k6mJZn0-L4eGyJVlOfm-Cevy0M=w1600-h900-no?authuser=0');
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
      width: 80%;
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
      max-width: 100%;
      min-height: 60px;
    }

    input {
      max-width: 100%;
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

  background: url('https://i.ibb.co/DVsLyx6/Wallpaper-da-lua-1lua.jpg'  );
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;

  #textLogin{
    display: none;
  }



  #verticalLine{
  display: none;
  }

  #soonLogin{
      
    }

  form{
    max-width: 346px;
    display: flex;
    font-family: 'geo';
    max-height: 100%;
    margin-right: 14%;
    margin-top: 30%;
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
    display: 60%;
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

export const StyledToast = styled(ToastContainer)`
  font-size: 1.6rem; 
  text-align: center;

  .Toastify__toast-body {
    gap: 10px;
    display: flex;
    flex-direction: column
  }
 
`;