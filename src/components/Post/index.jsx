import { useContext, useEffect, useState } from 'react'
import IconDelete from '../../assets/IconDelete'
import IconEdit from '../../assets/IconEdit'
import { BlogContext } from '../../context/blog'
import { PostsContext } from '../../context/posts'
import Api from '../../services/api'
import { PostContainer } from './styles'

const Post = ({ post }) => {

    const { setIsEditVisible, setIsDeleteVisible, setPostOnFocus } = useContext(PostsContext)
    const { token, userID } = useContext(BlogContext)
    const [ user, setUser ] = useState({})

    useEffect(() => {
        Api.get(`users/${post.userId}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }, [post])

    return (

        <PostContainer>

            <header>

                <h3> {post?.title} </h3>
                {   
                    post?.userId === userID
                    && 
                    <div>

                        <button onClick={() => {

                            localStorage.setItem('@Post_ID', post.id)
                            setIsEditVisible(true)

                            Api.defaults.headers.authorization = `Bearer ${token}`

                            Api.get(`posts/${post.id}`)
                            .then(res => {setPostOnFocus(res.data)})
                            .catch(err => console.log(err))
                            

                        }}> <IconEdit/> </button>
                        
                        <button onClick={() => {

                            localStorage.setItem('@Post_ID', post.id)
                            setIsDeleteVisible(true)
                            
                        }}> <IconDelete/> </button>

                    </div>
                }
            </header>

            <section className='user_info'>

               {<img src={user.image} alt='Foto do usuário' /   >}

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