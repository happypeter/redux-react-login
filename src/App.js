import React, { Component } from 'react'
import './App.css'
import store from './store'
import { Provider } from 'react-redux'
import HomePage from './HomePage'
import PostPage from './PostPage'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/post/:id" component={PostPage} />
          </Switch>
        </Router>
      </Provider>

    )
  }
}

export default App;
