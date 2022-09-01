import { useContext } from 'react'
import { v4 as uuid } from 'uuid'

import IconClose from '../../assets/IconClose'
import IconConfig from '../../assets/IconConfig'
import IconCreatePost from '../../assets/IconCreatePost'
import IconDelete from '../../assets/IconDelete'
import IconEmail from '../../assets/IconEmail'
import IconLogout from '../../assets/IconLogout'
import IconMenuBurger from '../../assets/IconMenuBurger'
import IconProfile from '../../assets/IconProfile'
import IconRocket from '../../assets/IconRocket'
import IconSchool from '../../assets/IconSchool'

import { HeaderContainer } from '../../components/Header/styles'
import Modal from '../../components/Modal'
import Post from '../../components/Post'
import { BlogContext } from '../../context/blog'
import { PostsContext } from '../../context/posts'

const Blog = () => {

    const { isHeaderVisible, setIsHeaderVisible, isProfileVisible, setIsProfileVisible } = useContext(BlogContext)
    const { postsList, postOnFocus, isCreateVisible, isEditVisible, isDeleteVisible } = useContext(PostsContext)

    return (
        <div>
            <>
                {
                    window.matchMedia('(min-width: 1024px)').matches ?

                        <HeaderContainer>

                            <button> <IconRocket/>  </button>
                            <button> <IconProfile/> </button>
                            <button> <IconLogout/>  </button>
                            
                        </HeaderContainer>
                    :
                        isHeaderVisible === false ? 

                            <HeaderContainer>

                                <button className="button-menu"> <IconMenuBurger/> </button>

                            </HeaderContainer>
                        :
                            <header>

                                <div className="header_div">

                                <button> <IconRocket/>  </button>
                                <button> <IconProfile/> </button>
                                <button> <IconLogout/>  </button>

                                </div>

                                <button className="btn-close"> <IconClose/> </button>

                            </header>
                }
            </>
            <main>

                <div className="div-createPost">

                    <p>Adicone uma nova postagem</p>
                    <button className="btn-create"> <IconCreatePost/> </button>

                </div>

                <ul>
                    {
                        postsList.map(post => <Post key={uuid()} post={post}/>)
                    }
                </ul>

            </main>

            {
                isCreateVisible === true 
                &&
                <Modal>

                    <div className='modal_create'>

                        <IconClose/>

                        <div className='container-input'>

                            <label htmlFor="input_createPost"> Título </label>
                            <input type="text" id='input_createPost' placeholder='Digite aqui o título da sua publicação'/>

                        </div>

                        <div className='container_textare'>

                            <label htmlFor="create_post"> Publicação </label>
                            <textarea id="create_post" placeholder='Digite aqui suas ideias e opiniões'></textarea>

                        </div>

                        <button> Publicar! </button>

                    </div>

                </Modal>
           }

           {
                isEditVisible === true 
                &&
                <Modal>

                    <div className='modal_edit'>

                        <IconClose/>

                        <div className='container-input'>

                            <label htmlFor="input_createPost"> Título </label>
                            <input type="text" id='input_createPost' value={postOnFocus.title}/>

                        </div>

                        <div className='container-textarea'>

                            <label htmlFor=""> Publicação </label>
                            <textarea id="create_post" value={postOnFocus.resume}></textarea>

                        </div>

                        <button> Alterar </button>

                    </div>

                </Modal>
           }

           {
                isDeleteVisible === true 
                &&
                <Modal>

                    <div className='modal_delete'>

                        <div className='delete_info'>

                            <figure>
                                <IconDelete/>
                            </figure>

                            <h4> user.name , tem certeza que quer excluir essa publicação? </h4>
                            <p> Você não poderá desfazer essa ação. </p>

                        </div>

                        <div className='delete_btns'>

                            <button> Cancelar </button>
                            <button> Excluir </button>

                        </div>


                    </div>

                </Modal>
           }

            {
                isProfileVisible === true 
                &&
                <Modal>

                    <div>

                        <h3> usuario.nickname </h3>

                        <figure>
                            <img src='user.image' alt='Foto de perfil' />
                        </figure>

                        <section>

                            <div>

                                <figure>
                                    <IconSchool/>
                                </figure>

                                <span>user.type</span>

                            </div>

                            <div>

                                <figure>
                                    <IconEmail/>
                                </figure>

                                <span>user.email</span>

                            </div>

                        </section>

                        <button>
                            <IconConfig/>
                        </button>

                    </div>

                </Modal>
           }

        </div>
    )
}

export default Blog