const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS ='SET-USERS'
const SET_CURRENT_PAGE ='SET-CURRENT-PAGE'
const SET_TOTAL_COUNT ='SET-TOTAL-COUNT'

let initialState = {
  users: [],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
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

    default:
      return state
  }
}

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setUsersTotalCountActionCreator = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  }
}

export default usersReducer