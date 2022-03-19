import React, { useEffect, useState } from 'react'
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
import { triggerFocus } from 'antd/lib/input/Input'
import { modalState$, postState$ } from '../../Redux/Selectors'
const { TextArea } = Input
const ModalPost = () => {
    const dispatch = useDispatch()
    const [formModal] = Form.useForm()
    const { create, update } = useSelector(modalState$)
    const { postDetail } = useSelector(postState$)
    console.log(create, update)

    const handleCancel = () => {
        dispatch(actions.showModal.isModalCreate(false))
        dispatch(actions.showModal.isModalUpdate(false))
    }
    const onFinish = (values) => {
        if (create) {
            dispatch(actions.addPost.addPostRequest(values))
        }
        if (update) {
            const newPost = {
                _id: postDetail._id,
                data: values
            }
            console.log(newPost)
            dispatch(actions.updatePost.updatePostRequest(newPost))
        }
        handleCancel()
    }
    useEffect(() => {
        if (create) {
            console.log(1)
            formModal.resetFields()
        }
        if (update) {
            console.log(2)
            formModal.setFieldsValue({
                title: postDetail.title,
                description: postDetail.description,
                image: postDetail.image,
                urlDemo: postDetail.urlDemo,
                urlSource: postDetail.urlSource
            })
        }
    }, [create, update])
    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = ""
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                baseURL = reader.result
                resolve(baseURL)
                console.log(baseURL)
            }
        })
    }
    const handleFileInputChange = e => {
        console.log(e.target.files[0].size)
        getBase64(e.target.files[0])
                .then(result => {
                    formModal.setFieldsValue({
                        image: result
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        // if (e.target.files[0].size <= 60000) {
        //     getBase64(e.target.files[0])
        //         .then(result => {
        //             formModal.setFieldsValue({
        //                 image: result
        //             })
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        //     return
        // }
        // notification.open({
        //     message: 'Tải ảnh thất bại',
        //     description: 'Ảnh có kích thước lớn hơn 60kb',
        //     icon: <CloseCircleOutlined style={{ color: "red" }} />,
        // })

    }
    return (
        <>

            <Modal
                title="Create"
                visible={create || update}
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