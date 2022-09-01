import { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostsContext } from '../../context/posts'
import IconClose from '../../assets/IconClose'
import { ModalContainer } from './styles'
import Api from '../../services/api';

const ModalCreate = () => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        post: yup.string().required()
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    function createPost(data) {
        Api.defaults.headers.authorization = `Bearer ${localStorage.getItem('token')}`

        Api.post('posts', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const { setIsCreateVisible } = useContext(PostsContext)

    return (

        <ModalContainer onSubmit={handleSubmit(createPost)}>

            <div className='modal_create'>

            <button className='btn-close' onClick={() => setIsCreateVisible(false)}>
                <IconClose/>
            </button> 

            <div className='container-input'>

                <label htmlFor='input_createPost'> Título </label>
                <input 
                    type='text' 
                    id='input_createPost' 
                    placeholder='Digite aqui o título da sua publicação'
                    {...register('title', {required: true, maxLength: {value: 20, message: 'Número máximo de caracteres atingido'}})}
                />

            </div>

            <div className='container_textarea'>

                <label htmlFor='create_post'> Publicação </label>
                <textarea 
                    id='create_post' 
                    placeholder='Digite aqui suas ideias e opiniões'
                    {...register('post', {required: true})}
                ></textarea>

            </div>

            <button type='submit'> Publicar! </button>

            </div>

        </ModalContainer>
    )
}

export default ModalCreate