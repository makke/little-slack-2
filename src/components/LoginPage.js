import React from 'react';
import axios from 'axios';

import { Redirect } from 'react-router'



class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoggedIn: false,
      userName: "",
      redirect: false,
      getwhat: "users",
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleLogin = this.props.toggleLogin.bind(this);

    //alert (JSON.stringify(this.props));
    //alert (this.props.location.state.message);
  }

  componentDidMount() {
    axios.get(`http://localhost:4200/api/${this.state.getwhat}`).then(res => {
      const posts = Array.from(res.data);
      //const posts = res.data.map(obj => obj.data);
      this.setState({posts});
    }).catch(function(error) {
      console.log(error);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChange2(event) {
    // Ei kutsuta jos käyttäjä valitsee ensimmäisen oletusnimen listalta *virhe*
    this.setState({userList: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4200/api/users/', {
        name: this.state.value
      })
      .then( data => {
        if (data.data.hasOwnProperty('errmsg')) {alert("Sorry: "+data.data.errmsg)}
        else {
          // Set Username & Logged in
          this.toggleLogin(this.state.value);
        }
      })
      .catch(err => console.log(err))
  }

  handleChoice(event) {
    event.preventDefault();

    let _this = this;
    _this.setState({redirect: true});
    this.setState({userName: this.state.value})

    // Set Username & Logged in
    if (this.state.userList==null){this.toggleLogin(this.state.posts[0].name);}
    else (this.toggleLogin(this.state.userList));
  }

  render() {
    return (
      <main>
        <h1>Please log in</h1>
        <h2>Choose your user from our list</h2>
        <form>
          <select name="userList" value={this.state.userList} onChange={this.handleChange2}>
            {
              this.state.posts.map(post =>
              <option key={post._id} value={post.name}>
                {post.name}
              </option>)
            }
          </select>
          <input type="submit" value="Submit" onClick={this.handleChoice.bind(this)} />
            {this.state.redirect &&
           <Redirect to={{
            pathname: '/',
            state: {from: this.state.userName }
          }} />
          }
        </form><br/>
        <h2>or add a new user to the list</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="freeInput" value={this.state.value} onChange={this.handleChange} placeholder="Give new username" />
          <input type="submit" value="Submit" />
        </form><br/>
      </main>
    );
  }
}


export default LoginPage
