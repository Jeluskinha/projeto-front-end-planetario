import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { motion } from "framer-motion"

import IconClose from '../../assets/IconClose'
import IconCreatePost from '../../assets/IconCreatePost'
import IconLogout from '../../assets/IconLogout'
import IconMenuBurger from '../../assets/IconMenuBurger'
import IconProfile from '../../assets/IconProfile'
import IconRocket from '../../assets/IconRocket'


import { HeaderContainer } from '../../components/Header/styles'
import Post from '../../components/Post'

import { BlogContext } from '../../context/blog'
import { PostsContext } from '../../context/posts'
import ModalCreate from '../../components/ModalCreate';
import ModalDelete from '../../components/ModalDelete';
import ModalEdit from '../../components/ModalEdit';
import ModalProfile from '../../components/ModalProfile';
import Logo from '../../assets/Logo'
import { BlogContainer } from './styles'

import { DashboardContext } from '../../context/dashboard'


const Blog = () => {

    const { isHeaderVisible, setIsHeaderVisible, isProfileVisible, setIsProfileVisible } = useContext(BlogContext)
    const { postsList, isCreateVisible, setIsCreateVisible,isEditVisible, isDeleteVisible} = useContext(PostsContext)

    const { setUserIsLog} = useContext(DashboardContext)
    

    const navigate = useNavigate()

    function logout() {
        localStorage.clear()
        navigate('/', { replace:true })
    }

    useEffect(() => {
        const token = localStorage.getItem('@plantaryM3:token')
        !token && navigate('/login', { replace: true })
    }, [navigate])

    return (

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01] }}
        >
        <BlogContainer>
            <>
                {
                    window.matchMedia('(min-width: 1024px)').matches ?

                        <HeaderContainer>

                            <div className='header_div-logo'>

                                <Logo/>

                            </div>

                            <div className='header_div-extra'>

                                <motion.button  
                                    whileHover={{ scale: 1.2 }}
                                    whileFocus={{ scale: 1.2 }} 
                                    onClick={() => navigate('/', { replace: true }) && console.log('foguete')}> <IconRocket/> </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.2 }}
                                    whileFocus={{ scale: 1.2 }}
                                    onClick={() => setIsProfileVisible(true)}> <IconProfile/> </motion.button>
                                <motion.button 
                                    whileHover={{ scale: 1.2 }} 
                                    whileFocus={{ scale: 1.2 }}
                                    onClick={() => logout() && setUserIsLog(false)}> <IconLogout/> </motion.button>

                            </div>
                            
                        </HeaderContainer>
                    :
                        isHeaderVisible === false ? 
                            
                            <HeaderContainer>

                                <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0, 0.71, 0.2, 1.01] }}
                                className='header_div-logo'>

                                <Logo/>

                                </motion.div>

                                <div className='header_div-extra'>

                                    <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01] }}
                                    whileHover={{ scale: 1.2 }}
                                    whileFocus={{ scale: 1.2 }} 
                                    className='button-menu' onClick={() => 
                                        setIsHeaderVisible(true)}> <IconMenuBurger/> 
                                    </motion.button>

                                </div>

                            </HeaderContainer>
                        :
                            <HeaderContainer>

                                <div className='header_div'>

                                    <motion.button 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01] }}
                                    whileFocus={{ scale: 1.2 }}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => navigate('/', { replace: true })}> <IconRocket/> </motion.button>

                                    <motion.button 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01] }}
                                    whileFocus={{ scale: 1.2 }}
                                    whileHover={{ scale: 1.2 }} 
                                    onClick={() => setIsProfileVisible(true)}> <IconProfile/> </motion.button>

                                    <motion.button 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01] }}
                                    whileFocus={{ scale: 1.2 }}
                                    whileHover={{ scale: 1.2 }} 
                                    onClick={() => logout()}> <IconLogout/> </motion.button>

                                </div>

                                <motion.button 
                                whileHover={{ scale: 1.2 }}
                                whileFocus={{ scale: 1.2 }} 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 0.8,
                                    delay: 0.2,
                                    ease: [0, 0.71, 0.2, 1.01] }}
                                className='btn-close' 
                                onClick={() => setIsHeaderVisible(false)}> <IconClose/> </motion.button>

                            </HeaderContainer>      
                }
            </>
            <main>

                <div className='div-createPost'> 

                    <p>Adicione uma nova postagem</p>
                    <motion.button 
                    whileHover={{ scale: 1.2 }}
                    className='btn-create' 
                    onClick={() => setIsCreateVisible(true)}> <IconCreatePost/> </motion.button>

                </div>

                <ul>
                    {   
                        postsList.map(post => <Post key={uuid()} post={post}/>)
                    }
                </ul>

            </main>

            { isCreateVisible === true && <ModalCreate/> }

            { isEditVisible === true && <ModalEdit/> }

            { isDeleteVisible === true && <ModalDelete/> }

            { isProfileVisible === true && <ModalProfile/> }

        </BlogContainer>
        </motion.div>
    )
}

export default Blog