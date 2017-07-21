import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'

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
         {this.props.currentUser}|退出
      </div>
    )

    return(
      <header>
        <Link to="/" >首页</Link>
        { this.props.isAuthenticated ? userInfo: authStr   }
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated,
  currentUser: state.account.currentUser
})

export default connect(mapStateToProps)(Header)
