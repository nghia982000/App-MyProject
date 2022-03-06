import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../Actions'
import * as api from '../../Api/login'
import setAuthToken from '../../Api/until'
function* fetchLoginSaga(action) {
    try {
        const response = yield call(api.fetchLogin, action.payload)
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
        const response = yield call(api.fetchRegister, action.payload)
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
        const response = yield call(api.fetchCheckLogin)
        // console.log(response)
        yield put(actions.checkLogin.checkLoginSuccess(response.data.user))
    } catch (err) {
        console.error(err.response)
        sessionStorage.removeItem('token')
        setAuthToken(null)
        yield put(actions.checkLogin.checkLoginFailure())
    }
}
function* mySaga() {
    yield takeLatest(actions.login.loginRequest, fetchLoginSaga)
    yield takeLatest(actions.register.registerRequest, fetchRegisterSaga)
    yield takeLatest(actions.checkLogin.checkLoginRequest, fetchCheckLoginSaga)
}

export default mySaga