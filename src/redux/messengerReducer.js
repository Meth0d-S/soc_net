const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
  dialogs: [
    {name: 'Ada', id: '1'},
    {name: 'Sam', id: '2'},
    {name: 'Liam', id: '3'},
    {name: 'Nox', id: '4'},
    {name: 'Andrew', id: '5'},
    {name: 'Bill', id: '6'}
  ],
  messages: [
    {text: 'Hello, how are you?', id: 1},
    {text: 'I am fine', id: 2},
    {text: 'Good buy', id: 3}
  ],
  newMessageText: 'Wait!'
}

const messengerReducer = (state = initialState, action) => {

  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      text: state.newMessageText,
      id: 4
    }
    state.messages.push(newMessage)
    state.newMessageText = ''
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.text
  }

  return state
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
  }
}

export default messengerReducer