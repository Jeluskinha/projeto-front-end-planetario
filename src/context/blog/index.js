import { createContext, useEffect, useState } from "react";

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {

    const [isHeaderVisible, setIsHeaderVisible]   = useState(false)
    const [isProfileVisible, setIsProfileVisible] = useState(false)

    useEffect(() => {
        //requisição 
    }, [])

    return (

        <BlogContext.Provider value={{ isHeaderVisible, setIsHeaderVisible, isProfileVisible, setIsProfileVisible }}>
            {children}
        </BlogContext.Provider>
    );
}