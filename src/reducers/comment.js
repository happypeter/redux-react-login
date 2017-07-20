let  comments = [
    {
      content: '多好的一呀',
      postId: '1'
    },
    {
      content: '真是不错',
      postId: '1'
    },
    {
      content: '多好的二呀',
      postId: '2'
    }
  ]

export default function commentReducer(state = comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state ,{ postId: action.postId, content: action.comment }]
    default:
      return state;
  }
}
