import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined ,SettingOutlined} from '@ant-design/icons'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
const Item = ({ description, image, title, urlDemo, urlSource, id}) => {
    const dispatch = useDispatch()
    const deletePost=(id)=>{
        const confirm=window.confirm("Delete")
        if(!confirm){
            return
        }
        dispatch(actions.deletePost.deletePostRequest(id))
    }
    const updatePost=(id)=>{
        dispatch(actions.updatePost.getPostRequest(id))
        dispatch(actions.showModal.isModalUpdate(true))
    }
    return (
        <div className="item">
            <div className="itemBoder">
                <div className="itemPicture">
                    <div className="itemEdit">
                    <SettingOutlined  onClick={()=>updatePost(id)}/>
                    <DeleteOutlined onClick={()=>deletePost(id)}/>
                    </div>
                    <div className="itemImg" style={{ backgroundImage: `url(${image})` }}></div>
                </div>
                <div className="itemTitle">
                    <p>{title}</p>
                </div>
                <div className="itemDecription">
                    <p>{description}</p>
                </div>
                <div className="itemAction">
                    <div className="actionDemo">
                        <a href={urlDemo} target='_blank'>Demo</a>
                    </div>
                    <div className="actionSource">
                        <a href={urlSource} target='_blank'>Source code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item