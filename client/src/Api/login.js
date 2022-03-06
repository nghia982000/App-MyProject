import axios from 'axios'
import request from './until'
const URL = 'http://localhost:5000'

// export const fetchLogin = (payload) => {
//     return request(`${URL}/auth/login`, {
//         method: "post",
//         data: payload
//     })
// }
export const fetchLogin = (payload) => axios.post(`${URL}/auth/login`,payload)
export const fetchRegister = (payload) => axios.post(`${URL}/auth/register`,payload)
export const fetchCheckLogin = () => axios.get(`${URL}/auth/checkLogin`)