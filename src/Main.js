import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Room from './components/Room'
import Admin from './components/Admin'
import NotFound from './components/NotFound'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={User}/>
      <Route path='/rooms' component={Room}/>
      <Route path='/admin' component={Admin}/>
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default Main
