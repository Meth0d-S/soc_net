const ADD_MESSAGE = 'ADD-MESSAGE'

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
  ]
}

const messengerReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_MESSAGE: {
      return  {
        ...state,
        messages: [
          ...state.messages,
          {text: action.message, id: 4}
        ]
      }
    }

    default:
      return state
  }
}


//ActionCreators

export const addMessage = (message) => ({type: ADD_MESSAGE, message})


export default messengerReducer