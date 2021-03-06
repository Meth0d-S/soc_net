import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingIsInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return ({
              ...user,
              followed: true
            })
          }
          return user
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return ({
              ...user,
              followed: false
            })
          }
          return user
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingIsInProgress: action.inProgress
          ? [...state.followingIsInProgress, action.userId]
          : state.followingIsInProgress.filter(id => id !== action.userId)
      }

    default:
      return state
  }
}


//ActionCreators

export const followSuccess = userId => ({type: FOLLOW, userId})

export const unfollowSuccess = userId => ({type: UNFOLLOW, userId})

export const setUsers = users => ({type: SET_USERS, users})

export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})

export const setUsersTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount})

export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingIsInProgress = (inProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
  inProgress,
  userId
})


//ThunkCreators

export const getUsers = (currentPage, pageSize) => dispatch => {
  dispatch(toggleIsFetching(true))
  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setUsersTotalCount(data.totalCount))
  })
}

export const follow = userId => dispatch => {
  dispatch(toggleFollowingIsInProgress(true, userId))
  usersAPI.follow(userId)
    .then(data => {
      if (data.resultCode === 0) dispatch(followSuccess(userId))
      dispatch(toggleFollowingIsInProgress(false, userId))
    })
}

export const unfollow = userId => dispatch => {
  dispatch(toggleFollowingIsInProgress(true, userId))
  usersAPI.unfollow(userId)
    .then(data => {
      if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
      dispatch(toggleFollowingIsInProgress(false, userId))
    })
}


export default usersReducer