import React, { Component } from 'react'
import './App.css'
import SignupPage from './SignupPage'
import HomePage from './HomePage'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
