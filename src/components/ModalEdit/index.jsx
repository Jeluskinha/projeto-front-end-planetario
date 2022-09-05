import { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostsContext } from '../../context/posts'
import Api from '../../services/api';
import { ModalContainer } from './styles'
import IconClose from '../../assets/IconClose'

const ModalEdit = () => {

    const schema = yup.object().shape({
        title: yup.string(),
        post: yup.string()
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    function changePost(data) {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjE0MTMxNywiZXhwIjoxNjYyMTQ0OTE3LCJzdWIiOiJXYkRscHZtIn0.CDVsONiPlOmF7MhnAJmc1GHdkC058B7wZPzloeupGfg`

        Api.patch(`posts/${localStorage.getItem('@Post_ID')}`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsEditVisible(false))
    }

    const { setIsEditVisible, postOnFocus } = useContext(PostsContext)
    
    return (

        <ModalContainer onClick={(e) => {
            e.target.className !== 'modal_create' && setIsEditVisible(false)
        }}>

            <form className='modal_edit' onSubmit={handleSubmit(changePost)}>

                <button className='btn-close' onClick={() => setIsEditVisible(false)}>
                    <IconClose/>
                </button> 

                <div className='container-input'>

                    <label htmlFor='input_createPost'> Título </label>
                    <input 
                        type='text' 
                        id='input_createPost' 
                        value={postOnFocus.title}
                        {...register('title', {required: true, maxLength: {value: 20, message: 'Número máximo de caracteres atingido'}})}
                    />

                </div>

                <div className='container-textarea'>

                    <label htmlFor='create_post'> Publicação </label>
                    <textarea 
                        id='create_post' 
                        value={postOnFocus.resume}
                        {...register('post', {required: true})}
                    ></textarea>

                </div>

                <button type='submit'> Alterar </button>

            </form>

        </ModalContainer>
    )
}

export default ModalEdit