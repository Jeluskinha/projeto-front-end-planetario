import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostsContext } from '../../context/posts'
import Api from '../../services/api';
import { ModalContainer } from './styles'
import IconClose from '../../assets/IconClose'
import { AnimatePresence, motion } from 'framer-motion';
import { BlogContext } from '../../context/blog';

const ModalEdit = () => {
    
    const { setIsEditVisible, postOnFocus, setPostList  } = useContext(PostsContext)
    const { token } = useContext(BlogContext)

    const [ titlePost, setTitlePost ] = useState('')

    const schema = yup.object().shape({
        title: yup.string(),
        post: yup.string()
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    async function changePost(data) {
        Api.defaults.headers.authorization = `Bearer ${token}`

        await Api.patch(`posts/${localStorage.getItem('@Post_ID')}`, data)
        .then(res => localStorage.removeItem('@Post_ID'))
        .catch(err => console.log(err))
        .finally(setIsEditVisible(false))

        await Api.get('posts')
        .then(res => setPostList(res.data.reverse()))
    }

    function inputValue() {
        setTitlePost(postOnFocus.title)
    }

    useEffect(() => {
        inputValue()
    }, [postOnFocus])
    
    return (

        <AnimatePresence>
            <ModalContainer className='modal_container' onClick={(e) => {
                e.target.className.includes('modal_container') && setIsEditVisible(false)
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
                className='modal_edit' 
                onSubmit={handleSubmit(changePost)}>

                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileFocus={{ scale: 1.2 }} 
                    className='btn-close' 
                    onClick={() => setIsEditVisible(false)}>
                        <IconClose/>
                    </motion.button> 

                    <div className='container-input'>

                        <label htmlFor='input_createPost'> T??tulo </label>
                        <input 
                            type='text' 
                            id='input_createPost' 
                            defaultValue={titlePost || ''}
                            onChange={(e) => setTitlePost('')}
                            {...register('title', {required: true, maxLength: {value: 20, message: 'N??mero m??ximo de caracteres atingido'}})}
                        />

                    </div>

                    <div className='container-textarea'>

                        <label htmlFor='create_post'> Publica????o </label>
                        <textarea 
                            id='create_post' 
                            defaultValue={postOnFocus.post}
                            {...register('post', {required: true})}
                        ></textarea>

                    </div>

                    <button type='submit'> Alterar </button>

                </motion.form>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalEdit