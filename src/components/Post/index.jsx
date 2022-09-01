import { useContext } from "react"
import IconDelete from "../../assets/IconDelete"
import IconEdit from "../../assets/IconEdit"
import { PostsContext } from "../../context/posts"
import { PostContainer } from "./styles"

const Post = ({ post }) => {

    const { setIsEditVisible, setIsDeleteVisible } = useContext(PostsContext)

    return (

        <PostContainer>

            <header>

                <h3> {post?.title} </h3>
                {
                    post?.user_id
                    // === user.id
                    && 
                    <div>

                        <button> <IconEdit/>   </button>
                        <button> <IconDelete/> </button>

                    </div>
                }
            </header>

            <section className="user_info">

               <img src='colocar user.image' alt='Foto do usuário' />

                <div>
                    <h4> user.nickname </h4>
                    <span> user.type </span>
                </div>

            </section>

           <p> post?.resume </p>

        </PostContainer>
    )
}

export default Post