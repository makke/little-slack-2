import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './Main'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: true,
        userName: "Markus"
      };
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} />
        <div className="container">
          <Sidebar />
          <Main isLoggedIn={this.state.isLoggedIn} userName={this.state.userName} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
