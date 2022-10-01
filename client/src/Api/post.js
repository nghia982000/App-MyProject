import axios from 'axios'
const URL = ' https://personal-project-nghia.herokuapp.com/post'

export const fetchPostData = () => axios.get(`${URL}/listPost`)
// export const fetchPostData = () => axios.get(`${URL}/getPost`)
export const fetchDeletePost = (payload) => axios.delete(`${URL}/deletePost/${payload}`)
export const fetchAddPost = (payload) => axios.post(`${URL}/addPost`,payload)
export const fetchUpdatePost = (payload) => axios.put(`${URL}/updatePost/${payload._id}`,payload.data)