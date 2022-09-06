import { useContext } from 'react'

import { PostsContext } from '../../context/posts'
import { ModalContainer } from './styles'
import IconDelete from '../../assets/IconDelete'
import Api from '../../services/api'
import { AnimatePresence, motion } from 'framer-motion'

const ModalDelete = () => {

    const { setIsDeleteVisible } = useContext(PostsContext)

    function deletePost() {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjQwMDc5NCwiZXhwIjoxNjYyNDA0Mzk0LCJzdWIiOiJ6eUJDNFVNIn0.F-d2M6dKDmfa6r4OhYUG8pkfdQ4q4Z-SvxcA7q1NpRY`

        Api.delete(`posts/${localStorage.getItem('@Post_ID')}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsDeleteVisible(false))
    }

    return (
        <AnimatePresence>
            <ModalContainer>

                <motion.div 
                key="modal"
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01] 
                }}
                className='modal_delete'>

                    <div className='delete_info'>

                        <figure> <IconDelete/> </figure>

                        <h4> user.name , tem certeza que quer excluir essa publicação? </h4>
                        <p> Você não poderá desfazer essa ação. </p>

                    </div>

                    <div className='delete_btns'>

                        <button id='button-cancel' onClick={() => setIsDeleteVisible(false)}> Cancelar </button>
                        <button id='button-delete' onClick={() => deletePost}> Excluir </button>

                    </div>

                </motion.div>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalDelete