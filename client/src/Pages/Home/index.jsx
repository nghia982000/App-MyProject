import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Spin } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
import './style.scss'
import { postState$ } from '../../Redux/Selectors'
import Modal from '../../Components/Modal'
import Item from '../../Components/Item'
const Home = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(postState$)
  console.log(data)
  const showModal = () => {
    dispatch(actions.showModal.isModalCreate(true))
  }

  useEffect(() => {
    dispatch(actions.postData.postDataRequest())
  }, [])
  return (
    <>
      <Button shape="circle" className='createPost' type="primary" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal />
      <div className="product">
        <div className="listItem">
          {
            data.map((item, index) => {
              return (
                <Item
                  key={index}
                  description={item.description}
                  image={item.image}
                  title={item.title}
                  urlDemo={item.urlDemo}
                  urlSource={item.urlSource}
                  id={item._id}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home