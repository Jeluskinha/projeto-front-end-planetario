import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from './style'
import logo from '../../assets/LogoPlanetario.svg'
import Api from '../../services/api'


const schema = yup.object({

    email: yup.string().email('Deve ser um email').required('O email é obrigatório'),
    
    password: yup.string().required('A senha é obrigatória')
}) 


const Login = () => {
const {register, handleSubmit,  formState: { errors }} = useForm({
    resolver: yupResolver(schema)
    })

    const navigate = useNavigate()

async function loginUser(data){

    await Api.post('login', data)
    .then( (response) => {
        localStorage.setItem('@plantaryM3:token', response.data.accessToken)
        localStorage.setItem('@plantaryM3:nickname', response.data.user.nickname)
        localStorage.setItem('@plantaryM3:user_id', response.data.user.id)
        navigate('/blog', {replace: true}) 
    })
    .catch((error) => {
        alert('Email ou senha incorretos')
    })
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
                
            <div id="verticalLine"></div>        
        <div id='justifyCellPhone'>
            <form onSubmit={handleSubmit(loginUser)}>
                <p id='textLogin2'>Login</p>

                <label htmlFor="email" className='labelForm'>Email:</label>

                <div className='inputErrorFunction'>
                    <input type="email" id="email" { ...register('email')} className='inputForm'/>
                        <p className='mensageErr'>{errors.email?.message}</p>
                </div>

                <label htmlFor="password" className='labelForm'>Senha:</label>

                <div className='inputErrorFunction'>
                    <input type="password" id="password" { ...register('password')} className='inputForm'/>
                        <p className='mensageErr'>{errors.password?.message}</p>
                </div>


                <div id='centerButton'>
                    <button id='buttonLogin'>Login</button>
                </div>
                <div id='centerSpan'>
                    <span id='spanLogin'>
                        Ainda não faz parte da comunidade? 
                        <br />Cadastre-se <a href="http://localhost:3000/register"> aqui </a>
                </span>
                </div>
            </form>
        </div>    
    </div>
        <img src={logo} alt="" id='soonLogin' />
</LoginStyle>

)
}

export default Login