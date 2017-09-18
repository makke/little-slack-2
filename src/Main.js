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


  constructor(props) {
    super(props);
  }

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


// <CounterButton />

// class CounterButton extends React.Component {
//   state = {
//     clickCounter: 0,
//     isLoggedIn: true,
//     userName: "Markus",
//     currentTimestamp: new Date()
//   };
//
//   handleClick = () => {
//     this.setState((prevState) => {
//       return {
//         clickCounter: prevState.clickCounter + 1
//       };
//     });
//   };
//
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({currentTimestamp: new Date()})
//     }, 1000);
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Click</button>
//         <p>Clicked: {this.state.clickCounter}</p>
//         <p>User: {this.state.userName}</p>
//         <p>Logged in: {this.state.isLoggedIn.toString()}</p>
//         <p>Time: {this.state.currentTimestamp.toLocaleString()}</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<CounterButton />);
