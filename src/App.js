import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './Main'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'

function LoggedIn(props) {
  const isLoggedIn = props.isLoggedIn;
  const userName = props.userName;
  let toggleLogin = props.toggleLogin;
  if (isLoggedIn) {
      return (
        <div>
          <Header isLoggedIn={isLoggedIn} userName={userName} />
          <div className="container">
            <Sidebar />
            <Main isLoggedIn={isLoggedIn} />;
          </div>
          <Footer />
        </div>
      )
  } else {
      return <LoginPage isLoggedIn={isLoggedIn} userName={userName} toggleLogin={toggleLogin} />;
  }
}

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,  // User is not logged in at start
        userName: "Markus"
      };
      this.toggleLogin = this.toggleLogin.bind(this)
  }

  toggleLogin(user) {
    const currentState = this.state.isLoggedIn;
    this.setState({
      isLoggedIn: !currentState,
      userName: user
    })
  }


  render() {
    return (
      <LoggedIn isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} toggleLogin={this.toggleLogin} />
    );
  }
}


export default App;
