export default function likeReducer(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT_LIKE':
      console.log('state', state)
      return state + 1
    default:
      return state;
  }
}
