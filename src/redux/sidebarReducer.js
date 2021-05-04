const initialState = {
  friends: [
    {name: 'Ada', avatar: 'https://storge.pic2.me/c/1360x800/335/5fbd6398351b62.87170151.jpg', id: 1},
    {name: 'Sam', avatar: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', id: 2},
    {name: 'Liam', avatar: 'https://99px.ru/sstorage/41/2020/03/image_410803200015174918832.png', id: 3},
    {name: 'Nox', avatar: 'https://avatarko.ru/img/avatar/1/Mass_Effect_cat.jpg', id: 4},
    {name: 'Andrew', avatar: 'https://www.meme-arsenal.com/memes/d9250ee29a5b10f34469acc3b4186a46.jpg', id: 5},
    {name: 'Bill', avatar: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_ogon_1501.jpg', id: 6},
  ]
}

const sidebarReducer = (state = initialState, action) => {
  return state
}

export default sidebarReducer