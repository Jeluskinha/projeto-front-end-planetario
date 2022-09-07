import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { LoginStyle, StyledToast } from './style'
import logo from '../../assets/LogoPlanetario.svg'
import Api from '../../services/api'

import { toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react'
import { DashboardContext } from '../../context/dashboard'


const schema = yup.object({

    email: yup.string().email('Deve ser um email').required('O email é obrigatório'),
    
    password: yup.string().required('A senha é obrigatória')
}) 


const Login = () => {
    const { setUserIsLog } = useContext(DashboardContext)

    const {register, handleSubmit,  formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate()

async function loginUser(data){

    const notify = () => toast.error("Email ou senha incorretos!",{
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        hideProgressBar: true,
        theme: "dark",
       
    });

    await Api.post('login', data)
    .then((response) => {
        localStorage.setItem('@plantaryM3:token', response.data.accessToken)
        localStorage.setItem('@plantaryM3:nickname', response.data.user.nickname)
        localStorage.setItem('@plantaryM3:user_id', response.data.user.id)
        localStorage.setItem('@plantaryM3:user_image', response.data.user.image)
        localStorage.setItem('@plantaryM3:user_type', response.data.user.type)
        localStorage.setItem('@plantaryM3:user_email', response.data.user.email)
        navigate('/blog', {replace: true}) 
        setUserIsLog(false)
    })
    .catch((error) => {
        notify()
    })
}

return(

<LoginStyle>
    <StyledToast
    position="top-center"
    autoClose={5000}
    newestOnTop={false}
    closeOnClick={true}
    closeButton={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
/>
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
                        <br />Cadastre-se <Link to='/register'> aqui </Link>
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