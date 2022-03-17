import { INIT_STATE } from "../States"
import {getType,postData,deletePost,addPost, updatePost,showModal} from '../Actions'

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
        case getType(updatePost.getPostRequest):
            return {
                ...state,
                postDetail:state.data.find((item)=>(item._id === action.payload))
            }
        case getType(updatePost.updatePostSuccess):
            const newPost = state.data.map(item=>(
                item._id===action.payload._id ? action.payload : item
            ))
            return {
                ...state,
                data: newPost
            }
        default:
            return state
    }
}