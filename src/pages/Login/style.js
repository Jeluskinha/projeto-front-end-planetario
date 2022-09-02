import styled from 'styled-components';

export const LoginStyle = styled.body`
  @font-face {
    font-family: 'orbitron';
    src: url('../../assets/orbitron.light.ttf') format(truetype);
  }

  background-image: url(https://lh3.googleusercontent.com/WAhGKIkxRF79ah6MPEojG0BG6qbQHqNFF-eq1lk8nNwrG3ocT5ACSkK8M1uHB_2DPyFcqHyLpj6b1a_s_pdVFdc3n-K_a6TYzKe5cd7ObIRNdOS7gckGa78UQ9pPr4_CAL0PG_Yz6HgLeqm9rLncgVbC7-X5Yib8FxHlZWF044oh3axcFlz_NTukyD2l1wlx5WSGW-tfD4wgaP7QFTW0UhJ6CtrEXHfWegDmupl0iisay441Gh--tMWJOk2eweag2kGEcKSkuztBjZoxIyz22PmMCFAdeh2EEw7DEVuOlFTBiwx-lqzmzhhVvCwVjBoo_VCscxKByowBz8KfhbIrZNCqmALTdxTgvgQsTheW0_YEPDXIMU1eoNHPEv5IqZIQtvJhdEPLN8rJsXm7tAPwt45EMIZVISmdjE7sPF0pb4U3CE0idzIcjUT4jN1XzV11edO_4vtqsu5cpVeslTij84V-TBhMFA7AkHyJVLFxE9peU6hF4Fdjh2pCgrmlcfjQwuTQB696UExW98KZw46Nj2Ag3ft1qIa4zX_1HWNl2VOWSaI-Yb3HgzQEdkqte_li_z93oRfLLM3T_Lq6dFyJI-ytjbjOEaPlP7PLeeysKZVGIHCHY2CaiEBmylftLNhpTtj7XpGfZa7ZjyRpD3qJOsrg4X_ugKc-COj7C2xhO5jipoNGhwlZD1QGJs2d-Y3U59-yq98GpK1ZLUoqGqIOjHAn5QtgR_5rhvpkP4bOkVkEI_ndgVjLwH8eUryz=w879-h625-no?authuser=0);
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
      margin-left: 14%;
      display: flex;
      flex-direction: column;
    }




    #textRegister{
      color: white;
      font-size: 30px;
      min-width: 480px;
      max-width: 480px;
      max-height: 313px;
      margin-top: 14%;
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

    .labelForm{
      color: white;
      margin-top: 20px;
    }

    .mensageErr{
      color: #E83F5B;
      margin: none;

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
`;