import { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PostsContext } from '../../context/posts'
import Api from '../../services/api';
import { ModalContainer } from './styles'
import IconClose from '../../assets/IconClose'
import { AnimatePresence, motion } from 'framer-motion';

const ModalEdit = () => {

    const schema = yup.object().shape({
        title: yup.string(),
        post: yup.string()
    })
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    function changePost(data) {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjQwMDc5NCwiZXhwIjoxNjYyNDA0Mzk0LCJzdWIiOiJ6eUJDNFVNIn0.F-d2M6dKDmfa6r4OhYUG8pkfdQ4q4Z-SvxcA7q1NpRY`

        Api.patch(`posts/${localStorage.getItem('@Post_ID')}`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsEditVisible(false))
    }

    const { setIsEditVisible, postOnFocus } = useContext(PostsContext)
    
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

                </motion.form>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalEdit