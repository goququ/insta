import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import search from '../ducks/search'

export default combineReducers({
  router,
  search,
  form: formReducer,
})