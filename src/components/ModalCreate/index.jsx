import { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostsContext } from '../../context/posts'
import IconClose from '../../assets/IconClose'
import { ModalContainer } from './styles'
import Api from '../../services/api';
import { AnimatePresence, motion } from 'framer-motion';
import { BlogContext } from '../../context/blog';

const ModalCreate = () => {
    
    const { setIsCreateVisible, setPostList } = useContext(PostsContext)
    const { token, userID } = useContext(BlogContext)

    const schema = yup.object().shape({
        title: yup.string().required(),
        post: yup.string().required()
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    async function createPost(data) {
        Api.defaults.headers.authorization = `Bearer ${token}`

        await Api.post(`users/${userID}/posts`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsCreateVisible(false))

        await Api.get('posts')
        .then(res => setPostList(res.data.reverse()))
    }

    return (
        <AnimatePresence>
            <ModalContainer className='modal_container' onClick={(e) => {
                e.target.className.includes('modal_container') && setIsCreateVisible(false)
            }}>

                <motion.form 
                key="modal"
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01] 
                }}
                
                className='modal_create' onSubmit={handleSubmit(createPost)}>

                    <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileFocus={{ scale: 1.2 }} 
                    className='btn-close' 
                    onClick={() => setIsCreateVisible(false)}>
                        <IconClose/>
                    </motion.button> 

                    <div className='container-input'>

                        <label htmlFor='input_createPost'> T??tulo </label>
                        <input 
                            type='text' 
                            id='input_createPost' 
                            placeholder='Digite aqui o t??tulo da sua publica????o'
                            {...register('title', {required: true, maxLength: {value: 20, message: 'N??mero m??ximo de caracteres atingido'}})}
                        />

                    </div>

                    <div className='container_textarea'>

                        <label htmlFor='create_post'> Publica????o </label>
                        <textarea 
                            id='create_post' 
                            placeholder='Digite aqui suas ideias e opini??es'
                            {...register('post', {required: true})}
                        ></textarea>

                    </div>

                    <button type='submit'> Publicar! </button>

                </motion.form>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalCreate