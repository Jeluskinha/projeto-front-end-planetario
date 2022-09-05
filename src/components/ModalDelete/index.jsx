import { useContext } from 'react'

import { PostsContext } from '../../context/posts'
import { ModalContainer } from './styles'
import IconDelete from '../../assets/IconDelete'
import Api from '../../services/api'

const ModalDelete = () => {

    const { setIsDeleteVisible } = useContext(PostsContext)

    function deletePost() {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjM4MTc0MSwiZXhwIjoxNjYyMzg1MzQxLCJzdWIiOiJ6eUJDNFVNIn0.k2J1a7uXZrcWSIeqqlDJi51H8tWeCYeExpwYfBM48bk`

        Api.delete(`posts/${localStorage.getItem('@Post_ID')}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(setIsDeleteVisible(false))
        
    }

    return (

        <ModalContainer>

            <div className='modal_delete'>

            <div className='delete_info'>

                <figure> <IconDelete/> </figure>

                <h4> user.name , tem certeza que quer excluir essa publicação? </h4>
                <p> Você não poderá desfazer essa ação. </p>

            </div>

            <div className='delete_btns'>

                <button onClick={() => setIsDeleteVisible(false)}> Cancelar </button>
                <button onClick={() => deletePost}> Excluir </button>

            </div>

            </div>

        </ModalContainer>
    )
}

export default ModalDelete