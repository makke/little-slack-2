import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

import Home from './components/Home'
import User from './components/User'
import Room from './components/Room'
import Admin from './components/Admin'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'


class Main extends React.Component {

  LoggedIn = () => {
    return this.props.isLoggedIn;
  };


  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' render={() => (
              this.LoggedIn()
              ? (<User/>)
              : (<Redirect to="/login"/>))
            } />
          <Route path='/rooms' render={() => (
              this.LoggedIn()
              ? (<Room userName={this.props.userName} />)
              : (<Redirect to="/login"/>))
            } />
          <Route path='/admin' render={() => <Admin isLoggedIn={this.props.isLoggedIn} />} />
          <Route path='/login' component={LoginPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}


export default Main;
