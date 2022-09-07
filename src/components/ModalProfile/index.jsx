import { ModalContainer } from './styles'

import IconSchool from '../../assets/IconSchool'
import IconEmail from '../../assets/IconEmail'
import IconConfig from '../../assets/IconConfig'
import { useContext, useEffect, useState } from 'react'

import Api from '../../services/api'
import { BlogContext } from '../../context/blog'
import { AnimatePresence, motion } from 'framer-motion'

const ModalProfile = () => {

    const [ user, setUser ] = useState({})
    const { token, userID } = useContext(BlogContext)
    const { setIsProfileVisible } = useContext(BlogContext)
    
    useEffect(() => {
        Api.defaults.headers.authorization = `Bearer ${token}`

        Api.get(`users/${userID}`)
        .then(res => setUser(res.data))
        .catch((err) => console.log(err))
        
    }, [token, userID]) 

    return (

        <AnimatePresence>
            <ModalContainer className='modal_container' onClick={(e) => {
                e.target.className.includes('modal_container') && setIsProfileVisible(false)
            }}>

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
                className='modal-profile'>

                    <h3> {user.nickname} </h3>

                    <figure className='profile_picture'>
                        {/* <img src={user.image} alt='Foto de perfil' /> */}
                    </figure>

                    <section>

                        <div className='profile_info'> 

                            <div>

                                <figure> <IconSchool/> </figure>

                                <span> {user.type} </span>

                            </div>

                            <div>

                                <figure> <IconEmail/> </figure>

                                <span> {user.email} </span>

                            </div>
                        
                        </div>

                        <motion.button whileHover={{ scale: 1.2 }}> <IconConfig/> </motion.button>

                    </section>

                </motion.div>

            </ModalContainer>
        </AnimatePresence>
    )
}

export default ModalProfile