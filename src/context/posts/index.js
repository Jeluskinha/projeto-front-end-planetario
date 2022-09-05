import { createContext, useEffect, useState } from 'react';
import Api from '../../services/api';

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {

    const [postsList, setPostList]      = useState([])
    const [postOnFocus, setPostOnFocus] = useState({})

    const [isCreateVisible, setIsCreateVisible] = useState(false)
    const [isEditVisible, setIsEditVisible]     = useState(false)
    const [isDeleteVisible, setIsDeleteVisible] = useState(false)

    useEffect(() => {
        Api.defaults.headers.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFuYUBob3RtYWlsLmNvbSIsImlhdCI6MTY2MjE0MzYxMSwiZXhwIjoxNjYyMTQ3MjExLCJzdWIiOiJXYkRscHZtIn0.ignUlmLScLqjSPDk5Ed26ifLHExHJ49-INcBpt8di98`
        Api.get('posts')
        .then(res => setPostList(res.data))
    }, [])
 
    return (

        <PostsContext.Provider value={{
            postsList, setPostList,
            postOnFocus, setPostOnFocus,
            isCreateVisible, setIsCreateVisible,
            isEditVisible, setIsEditVisible,
            isDeleteVisible, setIsDeleteVisible
        }}>
            {children}
        </PostsContext.Provider>
    );
}