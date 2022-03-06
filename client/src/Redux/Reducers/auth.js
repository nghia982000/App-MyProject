import { INIT_STATE } from "../States"
import {getType,checkLogin} from '../Actions'

export default function authReducers(state=INIT_STATE.auth,action){
    switch (action.type){
        case getType(checkLogin.checkLoginRequest):
            return {
                ...state,
                authLoading:true
            }
        case getType(checkLogin.checkLoginSuccess):
            // console.log(action.payload)
            return {
                ...state,
                authLoading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case getType(checkLogin.checkLoginFailure):
            return {
                ...state,
                authLoading:true,
                isAuthenticated:false,
                user:null
            }
        default:
            return state
    }
}