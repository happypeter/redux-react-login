let posts = [
  {
    postId: '1',
    likes: 1,
    title: 'Git 技巧'
  },
  {
    postId: '2',
    likes: 2,
    title: '学习 Redux'
  }
]


export default function postReducer(state = posts, action) {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      console.log('state', state)
      return state + 1
    default:
      return state;
  }
}
