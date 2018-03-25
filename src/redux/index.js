import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import api from '../middles/api'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

const middlewares = applyMiddleware(routerMiddleware(history), thunk, api, logger)

const store = createStore(reducer, middlewares)

window.store = store
export default store