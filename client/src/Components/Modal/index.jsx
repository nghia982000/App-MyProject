import React, { useState } from 'react'
import {
    Table,
    Popconfirm,
    Space,
    Modal,
    Button,
    Form,
    Input,
    Spin,
    Breadcrumb,
    Select,
    notification
} from 'antd'
import {
    UploadOutlined,
    CloseCircleOutlined
} from "@ant-design/icons"
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
const { TextArea } = Input
const ModalPost = () => {
    const dispatch = useDispatch()
    const [formModal] = Form.useForm()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(true)
    }


    const handleCancel = () => {
        setIsModalVisible(false)
    }
    const onFinish = (values) => {
        dispatch(actions.addPost.addPostRequest(values))
        handleCancel()
    }
    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = ""
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                baseURL = reader.result
                resolve(baseURL)
            }
        })
    }
    const handleFileInputChange = e => {
        console.log(e.target.files[0])
        getBase64(e.target.files[0])
            .then(result => {
                formModal.setFieldsValue({
                    image: result
                })
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create
            </Button>
            <Modal
                title="Create"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={
                    <Button type="primary" htmlType="submit" form="formModal">
                        Save
                    </Button>}>
                <Form
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 18 }}
                    form={formModal}
                    name="formModal"
                    onFinish={onFinish}
                >
                    <Form.Item name="title" label="Title" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tiêu đề'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mô tả'
                        },

                    ]}
                        hasFeedback
                    >
                        <TextArea rows={2} />
                    </Form.Item>
                    <Form.Item label="Upload">
                        <Input type="file" name="file" id="file" onChange={(e) => handleFileInputChange(e)} hidden />
                        <label htmlFor="file" style={{ border: '1px solid #dddddd', padding: '5px', cursor: 'pointer' }}>
                            <UploadOutlined />
                            Tải ảnh lên
                        </label>
                    </Form.Item>
                    <Form.Item name="image" label="Image" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập image'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="urlDemo" label="Link demo" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập image'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="urlSource" label="Source code" rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập link source code'
                        }
                    ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>

                </Form>
            </Modal>
        </>

    )
}

export default ModalPost