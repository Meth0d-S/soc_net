const SET_USER ='SET-USER'

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
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }

}


//ActionCreators

export const setUser = (id, email, login) => ({type: SET_USER, data: {id, email, login}})

export default authReducer