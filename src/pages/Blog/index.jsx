import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

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

const Blog = () => {

    const { isHeaderVisible, setIsHeaderVisible, isProfileVisible, setIsProfileVisible } = useContext(BlogContext)
    const { postsList, isCreateVisible, setIsCreateVisible,isEditVisible, isDeleteVisible} = useContext(PostsContext)

    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem()
        localStorage.removeItem()

        navigate('/login', { replace:true })
    }

    return (
        <BlogContainer>
            <>
                {
                    window.matchMedia('(min-width: 1024px)').matches ?

                        <HeaderContainer>

                            <div className='header_div-logo'>

                                <Logo/>

                            </div>

                            <div className='header_div-extra'>

                                <button onClick={() => navigate('/', { replace: true })}> <IconRocket/> </button>
                                <button onClick={() => setIsProfileVisible(true)}> <IconProfile/> </button>
                                <button onClick={() => logout()}> <IconLogout/> </button>

                            </div>
                            
                        </HeaderContainer>
                    :
                        isHeaderVisible === false ? 

                            <HeaderContainer>

                                <div className='header_div-logo'>

                                <Logo/>

                                </div>

                                <div className='header_div-extra'>

                                    <button className='button-menu' onClick={() => 
                                        setIsHeaderVisible(true)
                                        }> 
                                        <IconMenuBurger/> 
                                    </button>

                                </div>

                            </HeaderContainer>
                        :
                            <HeaderContainer>

                                <div className='header_div'>

                                    <button onClick={() => navigate('/', { replace: true })}> <IconRocket/> </button>
                                    <button onClick={() => setIsProfileVisible(true)}> <IconProfile/> </button>
                                    <button onClick={() => logout()}> <IconLogout/> </button>

                                </div>

                                <button className='btn-close' onClick={() => setIsHeaderVisible(false)}> <IconClose/> </button>

                            </HeaderContainer>      
                }
            </>
            <main>

                <div className='div-createPost'> 

                    <p>Adicione uma nova postagem</p>
                    <button className='btn-create' onClick={() => setIsCreateVisible(true)}> <IconCreatePost/> </button>

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
    )
}

export default Blog