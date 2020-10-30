import React, {useState, useReducer} from 'react'

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type){
        case 'ADD_BLOGPOST':
            return [...state, {title: `Blog Post #${state.length + 1}`, content: `Lorem Ipsum`}]
        default:
            return state
    }
}

export const BlogProvider = ({children}) =>{
    // USING STATE
    // const [blogPosts, setBlogPosts] = useState([])
    // const addBlogPost =()=>{
    //     setBlogPosts(
    //         [...blogPosts, 
    //         {title: `Blog Post #${state.length + 1}`, content: `Lorem Ipsum`}
    //         ]
    //     )
    // }

    // USING REDUCER
    const [blogPosts, dispatch] = useReducer(blogReducer, [])

    const addBlogPost = () => {
        dispatch({
            type: 'ADD_BLOGPOST',
            payload: {}
        })
    }
    
    return(
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
    )  
}

export default BlogContext