import React, {useState, useReducer} from 'react'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type){
        case 'ADD_BLOGPOST':
            return [...state, {title: `Blog Post #${state.length + 1}`, content: `Lorem Ipsum`}]
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({
            type: 'ADD_BLOGPOST',
            payload: {}
        })        
    }

}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost}, [])
