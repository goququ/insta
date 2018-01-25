import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

const middlewares = applyMiddleware(routerMiddleware(history), thunk, logger)

const store = createStore(reducer, middlewares)

window.store = store
export default store