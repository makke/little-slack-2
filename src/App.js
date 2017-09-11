import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './Main'
import Footer from './components/Footer'

// this component will be rendered by our <___Router>
const App = () => (
  <div>
    <Header />
    <div className="container">
      <Sidebar />
      <Main />
    </div>
    <Footer />
  </div>
)

/**
class App extends React.Component {

  // props test
  updateVal(){
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.querySelector("#root"))
  }

  render(){
    return (
      <div>

        // Just testing props
        <h1>Hellooo Dude!</h1>
        <p><button onClick={this.updateVal.bind(this)}>
          {this.props.val}
        </button></p>

        // component for the page frame
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>Home</li>
            <li>Stuff</li>
            <li>Contact</li>
          </ul>
          <div className="content">

          </div>
        </div>

      </div>
    )
  }
}

App.defaultProps = {val: 0}

**/

export default App;
