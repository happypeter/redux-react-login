import React, { Component } from 'react'
import './App.css'
import Header from './Header'

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import Main from './Main'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Main />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
