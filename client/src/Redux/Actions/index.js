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