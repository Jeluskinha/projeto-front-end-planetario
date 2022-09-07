import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RegisterStyle } from './style'
import logo from '../../assets/LogoPlanetario.svg'
import Api from '../../services/api'
import { useNavigate } from 'react-router-dom'



const schema = yup.object({
    nickname: yup.string().required('O seu apelido é obrigatório'),

    email: yup.string().email('Deve ser um email').required('O seu email é obrigatório'),

    password:
        yup.string().required('A senha é obrigatória')
            .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
            .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
            .matches(/(\d)/, "deve conter ao menos 1 número")
            .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
            .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),

    select: yup.string().required('Você deve escolher uma opção')
})


const Register = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    function registerUser(data) {
        console.log(data)
            Api.post('users', data)
            .then( () => {
                navigate('/login', {replace: true}) 
            })
            .catch((error) => {
                alert('Email já cadastrado')
            })
    }


    return (
        <RegisterStyle>
            <div id='inColun'>
                <div id='textRegister'>
                    <p className='textLoginECadastro'>  Aqui você tem acesso </p>
                    <p className='textLoginECadastro'>  ao maior </p>
                    <p className='textLoginECadastro'>  acervo de conhecimento </p>
                    <p className='textLoginECadastro'>  sobre planetas! </p>

                    <p className='textLoginECadastro'>  Faça seu login e divirta-se </p>
                    <p className='textLoginECadastro'>  na imensidão da nossa galáxia!</p>
                </div>
                <div id="verticalLine"></div>
                <form onSubmit={handleSubmit(registerUser)}>

                    <p id='textRegister2'>Cadastro</p>

                    <label htmlFor="nickname" className='labelForm'>Apelido:</label>
                    <div className='junctionInputError'>
                    <input type="text" id="nickname" {...register('nickname')} className='inputForm' />
                    <p className='mensageErr'>{errors.nickname?.message}</p>
                    </div>



                    <label htmlFor="email" className='labelForm'>Email:</label>
                    <div className='junctionInputError'>
                    <input type="email" id="email" {...register('email')} className='inputForm' />
                    <p className='mensageErr'>{errors.email?.message}</p>
                    </div>


                    <label htmlFor="password" className='labelForm'>Senha:</label>
                    <div className='junctionInputError'>
                    <input type="password" id="password" {...register('password')} className='inputForm' />
                    <p className='mensageErr'>{errors.password?.message}</p>
                    </div>


                    <label htmlFor="select" className='labelForm'>Selecione uma das opções:</label>
                    <select name="" {...register('type')} className='inputForm'>
                        <option value="Entusiasta" className='option'>Entusiasta</option>
                        <option value="Aluno" className='option'>Aluno</option>
                        <option value="Professor" className='option'>Professor</option>
                    </select>
                    <div id='centerButton'>
                    <button id='buttonRegister'>Registrar</button>
                    </div>
                </form>
            </div>
            <img src={logo} alt="" id='soonRegister' />
        </RegisterStyle>

    )
}

export default Register