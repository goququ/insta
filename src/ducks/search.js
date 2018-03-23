
// Search CONSTS for users
export const LOAD_USER = 'insta/search/LOAD_USER'
export const LOAD_USER_OK = 'insta/search/LOAD_USER_OK'
export const LOAD_USER_ERR = 'insta/search/LOAD_USER_ERR'

// Search CONSTS for tags
export const LOAD_TAG = 'insta/search/LOAD_TAG'
export const LOAD_TAG_OK = 'insta/search/LOAD_TAG_OK'
export const LOAD_TAG_ERR = 'insta/search/LOAD_TAG_ERR'

export const searchTypes = {
  TAG: 'TAG',
  USER: 'USER'
}

// Search by users ACTIONS
export function loadUser(input){
  return {
    type: LOAD_USER,
    input
  }
}

export function loadUserSucsess(data){
  return{
    type: LOAD_USER_OK,
    data
  }
}

export function loadUserError(err){
  return{
    type: LOAD_USER_ERR,
    err
  }
}

// Search by tag ACTIONS
export function loadTag(input){
  return {
    type: LOAD_TAG,
    input
  }
}

export function loadTagSucsess(data){
  return{
    type: LOAD_TAG_OK,
    data
  }
}

export function loadTagError(err){
  return{
    type: LOAD_TAG_ERR,
    err
  }
}


const initState = {
  type: searchTypes.USER,
  data: null,
  loading: false,
  error: false
}


const search = (state=initState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...initState,
        type: searchTypes.USER,
        loading: true,
      }
    case LOAD_TAG: 
      return {
        ...initState,
        type: searchTypes.TAG,
        loading: true
      }
    case LOAD_USER_OK:
    case LOAD_TAG_OK:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false
      }
    case LOAD_USER_ERR:
    case LOAD_TAG_ERR:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.err
      }
    default:
      return state
  }
}

export default search