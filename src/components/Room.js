import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllRooms from './AllRooms'
import OneRoom from './OneRoom'

// This component matches one of two different routes
// depending on the full pathname
class Room extends React.Component {
  constructor(props) {
    super(props);

    // alert(this.props.userName);
  }

  render() {
    return (
    <Switch>
      <Route exact path='/rooms' component={AllRooms}/>
      <Route path='/rooms/:number' render={(props) => <OneRoom {...this.props} {...props} />} />

      { // TEST THIS:
      //   <Link
      //     to={{
      //     pathname: '/pathname',
      //     state: { message: 'hello, im a passed message!' }
      //   }}/>
      // // vailable as: this.props.location.state.message
      }
    </Switch>
  )}
}

export default Room
