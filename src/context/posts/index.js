import { createContext, useContext, useEffect, useState } from 'react';
import Api from '../../services/api';
import { BlogContext } from '../blog';

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {

    const [postsList, setPostList]      = useState([])
    const [postOnFocus, setPostOnFocus] = useState({})
    const [isChanged, setIsChanged]     = useState(false)

    const [isCreateVisible, setIsCreateVisible] = useState(false)
    const [isEditVisible, setIsEditVisible]     = useState(false)
    const [isDeleteVisible, setIsDeleteVisible] = useState(false)

    const { token } = useContext(BlogContext)

    useEffect(() => {
        Api.defaults.headers.authorization = `Bearer ${token}`
        Api.get('posts')
        .then(res => setPostList(res.data.reverse()))
    }, [token])
 
    return (

        <PostsContext.Provider value={{
            postsList, setPostList,
            postOnFocus, setPostOnFocus,
            isCreateVisible, setIsCreateVisible,
            isEditVisible, setIsEditVisible,
            isDeleteVisible, setIsDeleteVisible,
            isChanged, setIsChanged
        }}>
            {children}
        </PostsContext.Provider>
    );
}