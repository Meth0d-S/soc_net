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
      ]
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
  getState() {
    return this._state
  },
  addPost() {
    let newPost = {
      id: 7,
      text: this._state.profilePage.newPostText,
      like: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._rerenderEntireTree(this._state)
  },
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text
    this._rerenderEntireTree(this._state)
  },
  _rerenderEntireTree() {
    console.log('state changed')
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  }
}

export default store