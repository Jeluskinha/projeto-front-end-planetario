import { createContext, useState } from 'react';

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {

    const [ isHeaderVisible, setIsHeaderVisible ]   = useState(false)
    const [ isProfileVisible, setIsProfileVisible ] = useState(false)

    const token = localStorage.getItem('@plantaryM3:token')
    const userID = localStorage.getItem('@plantaryM3:user_id')

    return (

        <BlogContext.Provider value={{ token, userID, isHeaderVisible, setIsHeaderVisible, isProfileVisible, setIsProfileVisible}}>
            {children}
        </BlogContext.Provider>
    );
}