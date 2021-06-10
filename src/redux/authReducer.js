import {authAPI} from "../api/api";

const SET_USER = 'SET-USER'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}


const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }

}


//ActionCreators

export const setUser = (id, email, login, isAuth) => ({type: SET_USER, data: {id, email, login, isAuth}})


//ThunkCreators

export const getUser = () => dispatch => {
  authAPI.authMe()
    .then(data => {
      let {id, email, login} = data.data
      if (data.resultCode === 0) {
        dispatch(setUser(id, email, login, true))
      }
    })
}

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getUser())
      }
    })
}

export const logout = () => dispatch => {
  authAPI.logout()
    .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUser(null, null, null, false))
        }
      }
    )
}


export default authReducer