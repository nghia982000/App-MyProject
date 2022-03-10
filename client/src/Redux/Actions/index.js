import {createActions} from 'redux-actions'

export const getType=(reduxAction)=>{
    return reduxAction().type
}


export const login =createActions({
    loginRequest:(payload) => payload
})
export const register =createActions({
    registerRequest:(payload) => payload
})

export const checkLogin =createActions({
    checkLoginRequest:undefined,
    checkLoginSuccess:(payload) => payload,
    checkLoginFailure:undefined,
})
export const postData =createActions({
    postDataRequest:undefined,
    postDataSuccess:(payload) => payload,
    postDataFailure:undefined,
})
export const deletePost =createActions({
    deletePostRequest:(payload) => payload,
})
export const addPost =createActions({
    addPostRequest:(payload) => payload,
    addPostSuccess:(payload) => payload
})