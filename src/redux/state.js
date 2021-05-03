const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, text: 'Hi, how are you?', like: 123},
        {id: 2, text: 'Silence...', like: 1},
        {id: 3, text: 'Grow...', like: 1},
        {id: 4, text: 'Shit!', like: 4},
        {id: 5, text: 'Get ready!', like: 1},
        {id: 6, text: 'You soul is my', like: 1200}
      ],
      newPostText: 'Hey Yo!'
    },
    messengerPage: {
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
    },
    sidebar: {
      friends: [
        {name: 'Ada', avatar: 'https://storge.pic2.me/c/1360x800/335/5fbd6398351b62.87170151.jpg', id: 1},
        {name: 'Sam', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', id: 2},
        {name: 'Liam', avatar: 'https://99px.ru/sstorage/41/2020/03/image_410803200015174918832.png', id: 3},
        {name: 'Nox', avatar: 'https://avatarko.ru/img/avatar/1/Mass_Effect_cat.jpg', id: 4},
        {name: 'Andrew', avatar: 'https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg', id: 5},
        {name: 'Bill', avatar: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_ogon_1501.jpg', id: 6},
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 7,
        text: this._state.profilePage.newPostText,
        like: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text
      this._callSubscriber(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        text: this._state.messengerPage.newMessageText,
        id: 4
      }
      this._state.messengerPage.messages.push(newMessage)
      this._state.messengerPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messengerPage.newMessageText = action.text
      this._callSubscriber(this._state)
    }
  }
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


export default store