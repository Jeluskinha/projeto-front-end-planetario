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
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjQwMDc5NCwiZXhwIjoxNjYyNDA0Mzk0LCJzdWIiOiJ6eUJDNFVNIn0.F-d2M6dKDmfa6r4OhYUG8pkfdQ4q4Z-SvxcA7q1NpRY`

        Api.post('users/WbDlpvm/posts', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsCreateVisible(false))
    }

    const { setIsCreateVisible } = useContext(PostsContext)

    return (

        <ModalContainer className='modal_container' onClick={(e) => {
            e.target.className.includes('modal_container') && setIsCreateVisible(false)
        }}>

            <form className='modal_create' onSubmit={handleSubmit(createPost)}>

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

            </form>

        </ModalContainer>
    )
}

export default ModalCreate