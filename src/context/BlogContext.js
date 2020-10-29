import React, {useState} from 'react'

const BlogContext = React.createContext();

export const BlogProvider = ({children}) =>{
    // const blogPosts ={
    //     {title: 'Blog Post #1', content: "Lorem Ipsum"},
    //     {title: 'Blog Post #2', content: "Sit Amet"},
    // }
    const [blogPosts, setBlogPosts] = useState([])


    const addBlogPost =()=>{
        setBlogPosts(
            [...blogPosts, 
            {title: `Blog Post #${blogPosts.length + 1}`, content: `Lorem Ipsum`}
            ]
        )
    }
    return(
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
    )  
}

export default BlogContext