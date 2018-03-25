import { 
  LOAD_USER, 
  LOAD_TAG, 
  loadUserSucsess, 
  loadUserError, 
  loadTagSucsess,
  loadTagError 
} from '../ducks/search'
import { ACCESS_TOKEN } from '../config'

const getRecentUserUrl = (id) => {
  return `https://api.instagram.com/v1/users/${ id }/media/recent?access_token=${ ACCESS_TOKEN }`
}
const getRecentTagUrl = (tag) => {
  return `https://api.instagram.com/v1/tags/${ tag }/media/recent?access_token=${ ACCESS_TOKEN }`
}

const api = store => next => action => {
  
  let url
  
  switch (action.type) {
    case LOAD_USER:
      url = getRecentUserUrl(action.input)
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const { data, meta:{ error_message } } = res
          res.meta.code === 200 ? 
          store.dispatch(loadUserSucsess(data)) : 
          store.dispatch(loadUserError(error_message))
        })
        .catch(err => {
          console.log(err)
          store.dispatch(loadUserError(err.toString()))
        })
      
      return next(action)
      
    case LOAD_TAG:
      url = getRecentTagUrl(action.input)
      fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          const { data, meta:{ error_message } } = res
          res.meta.code === 200 ? 
          store.dispatch(loadTagSucsess(data)) : 
          store.dispatch(loadTagError(error_message))
        })
        .catch(err => store.dispatch(loadUserError('Ошибка при загрузке тега')))
      
      next(action)
      break;
    
    default:
      next(action)
  }
}

export default api