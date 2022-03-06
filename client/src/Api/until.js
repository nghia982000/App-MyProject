// import axios from 'axios'
// const request = axios.create({
//     timeout: 1200000,
//     headers: {
//         "Content-Type": "application/json",
//     },
// })
// const handleError = (error) => {
//     const { response = {} } = error
//     const { data, status, statusText } = response
//     return { data, status, statusText }
// }
// request.interceptors.response.use((response) => {
//     return response
// }, handleError)

// export default request
import axios from 'axios'

const setAuthToken = token => {
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete axios.defaults.headers.common['Authorization']
	}
}

export default setAuthToken