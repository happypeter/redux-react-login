import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

class Header extends Component {

  render() {
    let authStr = (
      <div>
        <Link to="/signup">注册</Link>
        <Link to="/login">登录</Link>
      </div>
    )

    let userInfo = (
      <div>
         Peter|退出
      </div>
    )
    let isAuthenticated = false
    return(
      <header>
      { isAuthenticated ? userInfo: authStr   }
      </header>
    )
  }
}

export default Header
