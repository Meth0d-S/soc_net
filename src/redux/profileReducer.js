const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  posts: [
    {id: 1, text: 'Hi, how are you?', like: 123},
    {id: 2, text: 'Silence...', like: 1},
    {id: 3, text: 'Grow...', like: 1},
    {id: 4, text: 'Shit!', like: 4},
    {id: 5, text: 'Get ready!', like: 1},
    {id: 6, text: 'You soul is my', like: 1200}
  ],
    newPostText: 'Hey Yo!'
}


const profileReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    let newPost = {
      id: 7,
      text: state.newPostText,
      like: 0
    }
    state.posts.push(newPost)
    state.newPostText = ''
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.text
  }

  return state
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updatePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}

export default profileReducer