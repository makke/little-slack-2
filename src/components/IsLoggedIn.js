import React from 'react'
import { Switch, Route } from 'react-router-dom'
import User from './User'

let isLoggedIn = true;

class IsLoggedIn extends React.Component {
  componentDidMount() {

    if (!isLoggedIn) {
      // redirect (we use a React Router method)
      // browserHistory.replace("/login")
    }
  }

  render() {
    if (isLoggedIn) {
      // return this.props.children
      return (<Route path='/users' component={User} />)
    } else {
      return null
    }
  }
}

export default IsLoggedIn
