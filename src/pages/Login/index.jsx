import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from './style'
import logo from '../../assets/LogoPlanetario.svg'


const schema = yup.object({

    email: yup.string().email('Deve ser um email').required('O email é obrigatório'),
    
    password: yup.string().required('A senha é obrigatória')
}) 


const Login = () => {
const {register, handleSubmit,  formState: { errors }} = useForm({
    resolver: yupResolver(schema)
    })

    const navigate = useNavigate()

function loginUser(data){
    console.log(data)

    //fazer Login

    navigate('/dashbord', {replace: true})
}




return(

<LoginStyle>
        <div id='inColun'>    
            <div id='textLogin'>
                <p className='textLoginECadastro'>  Aqui você tem acesso </p>
                <p className='textLoginECadastro'>  ao maior </p>
                <p className='textLoginECadastro'>  acervo de conhecimento </p>
                <p className='textLoginECadastro'>  sobre planetas! </p>

                <p className='textLoginECadastro'>  Faça seu login e divirta-se </p>
                <p className='textLoginECadastro'>  na imensidão da nossa galáxia!</p>
            </div>
            <div id="linha-vertical"></div>        

        <form onSubmit={handleSubmit(loginUser)}>
            <p id='textLogin'>Login</p>

            <label htmlFor="email" className='labelForm'>Email:</label>
            <input type="email" id="email" { ...register('email')} className='inputForm'/>
                <p className='mensageErr'>{errors.email?.message}</p>

            <label htmlFor="password" className='labelForm'>Senha:</label>
            <input type="password" id="password" { ...register('password')} className='inputForm'/>
                <p className='mensageErr'>{errors.password?.message}</p>
            <div id='centralizarBotao'>
                <button id='botaoRegistrar'>Login</button>
            </div>    
        </form>
        <img src={logo} alt="" id='logoLogin' />
    </div>
</LoginStyle>

)
}

export default Login