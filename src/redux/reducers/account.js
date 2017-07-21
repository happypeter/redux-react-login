let account = {
  isAuthenticated: false,
  currentUser: ''
}

export default function accountReducer(state = account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { isAuthenticated: true, currentUser: action.user.username}
    default:
      return state;
  }
}
