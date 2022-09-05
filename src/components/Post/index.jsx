import { useContext, useEffect, useState } from 'react'
import IconDelete from '../../assets/IconDelete'
import IconEdit from '../../assets/IconEdit'
import { PostsContext } from '../../context/posts'
import Api from '../../services/api'
import { PostContainer } from './styles'

const Post = ({ post }) => {

    const { setIsEditVisible, setIsDeleteVisible } = useContext(PostsContext)
    const [ user, setUser ] = useState({})

    useEffect(() => {
        Api.get(`users/${post.userId}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }, [])
    
    return (

        <PostContainer>

            <header>

                <h3> {post?.title} </h3>
                {   
                    post?.userId === 'zyBC4UM'
                    && 
                    <div>

                        <button onClick={() => {

                            localStorage.setItem('@Post_ID', post.id)
                            setIsEditVisible(true)

                        }}> <IconEdit/> </button>
                        
                        <button onClick={() => {

                            localStorage.setItem('@Post_ID', post.id)
                            setIsDeleteVisible(true)
                            
                        }}> <IconDelete/> </button>

                    </div>
                }
            </header>

            <section className='user_info'>

               <img src={user.image} alt='Foto do usuário' />

                <div>
                    <h4> {user.nickname} </h4>
                    <span> {user.type} </span>
                </div>

            </section>

           <p> {post?.post} </p>

        </PostContainer>
    )
}

export default Post