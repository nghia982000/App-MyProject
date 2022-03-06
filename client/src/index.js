import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './Redux/Reducers'
import mySaga from './Redux/Sagas'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
