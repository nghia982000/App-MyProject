import { INIT_STATE } from "../States"
import {getType,showModal} from '../Actions'

export default function modalReducers(state=INIT_STATE.modal,action){
    switch (action.type){
        case getType(showModal.isModalCreate):
            return {
                ...state,
                create:action.payload
            }
        case getType(showModal.isModalUpdate):
            return {
                ...state,
                update:action.payload
            }
        default:
            return state
    }
}