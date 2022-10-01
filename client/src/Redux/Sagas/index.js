import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../Actions'
import * as apiLogin from '../../Api/login'
import * as apiPost from '../../Api/post'
import setAuthToken from '../../Api/until'
function* fetchLoginSaga(action) {
    try {
        const response = yield call(apiLogin.fetchLogin, action.payload)
        // console.log(response)
        if (response.data.success) {
            sessionStorage.setItem('token',response.data.accessToken)
            window.location.href='/'
        }

    } catch (err) {
        console.error(err)
        if(err.response){
            console.log(err.response.data)
            alert(err.response.data.message)
        }
        else{
            console.log({success:false,message:err.message})
            alert(err.message)
        }
    }
}
function* fetchRegisterSaga(action) {
    try {
        const response = yield call(apiLogin.fetchRegister, action.payload)
        console.log(response)
        if (response.data.success) {
            window.location.href='/login'
            alert('Account successfully created')
        }

    } catch (err) {
        console.error(err)
        if(err.response){
            console.log(err.response.data)
            alert(err.response.data.message)
        }
        else{
            console.log({success:false,message:err.message})
            alert(err.message)
        }
    }
}

function* fetchCheckLoginSaga(action) {
    if(sessionStorage['token']){
        setAuthToken(sessionStorage['token'])
    }
    try {
        const response = yield call(apiLogin.fetchCheckLogin)
        // console.log(response)
        yield put(actions.checkLogin.checkLoginSuccess(response.data.user))
    } catch (err) {
        console.error(err.response)
        sessionStorage.removeItem('token')
        setAuthToken(null)
        yield put(actions.checkLogin.checkLoginFailure())
    }
}
function* fetchPostDataSaga(action) {
    try {
        const response = yield call(apiPost.fetchPostData)
        console.log(response)
        yield put(actions.postData.postDataSuccess(response.data.data))
        // yield put(actions.postData.postDataSuccess(response.data.posts))
    } catch (err) {
        console.error(err.response)
        yield put(actions.postData.postDataFailure())
    }
}
function* fetchDeletePostSaga(action) {
    try {
        const response = yield call(apiPost.fetchDeletePost,action.payload)
        console.log(response)
    } catch (err) {
        console.error(err.response)
    }
}
function* fetchAddPostSaga(action) {
    try {
        const response = yield call(apiPost.fetchAddPost,action.payload)
        console.log(response.data.post)
        yield put(actions.addPost.addPostSuccess(response.data.post))
    } catch (err) {
        console.error(err.response)
    }
}
function* fetchUpdatePostSaga(action) {
    try {
        const response = yield call(apiPost.fetchUpdatePost,action.payload)
        console.log(response)
        yield put(actions.updatePost.updatePostSuccess(response.data.post))
    } catch (err) {
        console.error(err.response)
    }
}
function* mySaga() {
    yield takeLatest(actions.login.loginRequest, fetchLoginSaga)
    yield takeLatest(actions.register.registerRequest, fetchRegisterSaga)
    yield takeLatest(actions.checkLogin.checkLoginRequest, fetchCheckLoginSaga)
    yield takeLatest(actions.postData.postDataRequest, fetchPostDataSaga)
    yield takeLatest(actions.deletePost.deletePostRequest, fetchDeletePostSaga)
    yield takeLatest(actions.addPost.addPostRequest, fetchAddPostSaga)
    yield takeLatest(actions.updatePost.updatePostRequest, fetchUpdatePostSaga)
}

export default mySaga