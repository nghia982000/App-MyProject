import { INIT_STATE } from "../States"
import {getType,postData,deletePost,addPost} from '../Actions'

export default function postReducers(state=INIT_STATE.post,action){
    switch (action.type){
        case getType(postData.postDataSuccess):
            console.log(action.payload)
            return {
                ...state,
                data:action.payload
            }
        case getType(deletePost.deletePostRequest):
            return {
                ...state,
                data:state.data.filter(post=>post._id !== action.payload)
            }
        case getType(addPost.addPostSuccess):
            state.data.push(action.payload)
            return {
                ...state,
                // data:state.data.push(action.payload)
            }
        case getType(postData.postDataFailure):
            return {
                ...state,
                data:null
            }
        default:
            return state
    }
}