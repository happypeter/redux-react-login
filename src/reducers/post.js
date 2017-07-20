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
      let otherPosts = state.filter(value => value.postId !== action.id)
      let currentPost = state.filter(value => value.postId !== action.id)[0]
      return [otherPosts, { ...currentPost, likes: currentPost.likes + 1 }]
    default:
      return state;
  }
}
