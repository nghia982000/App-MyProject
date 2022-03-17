import { combineReducers } from "redux"
import auth from './auth'
import post from './post'
import modal from './modal'
export default combineReducers({
    auth,
    post,
    modal
})