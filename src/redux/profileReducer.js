import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

const initialState = {
  posts: [
    {id: 1, text: 'Hi, how are you?', like: 123},
    {id: 2, text: 'Silence...', like: 1},
    {id: 3, text: 'Grow...', like: 1},
    {id: 4, text: 'Shit!', like: 4},
    {id: 5, text: 'Get ready!', like: 1},
    {id: 6, text: 'You soul is my', like: 1200}
  ],
  user: null,
  status: ''
}


const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      return {
        ...state,
        posts: [
          {id: 7, text: action.message, like: 0},
          ...state.posts
        ]
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        user: action.user
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state
  }
}


//ActionCreators

export const addPost = (message) => ({type: ADD_POST, message})

export const setUserProfile = user => ({type: SET_USER_PROFILE, user})

export const setStatus = status => ({type: SET_STATUS, status})


//ThunkCreators

export const getUserProfile = (userId) => dispatch => {
  profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
}

export const getStatus = (userId) => dispatch => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => dispatch => {
  profileAPI.updateStatus(status)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}


export default profileReducer