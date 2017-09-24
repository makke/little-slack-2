import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

// Get ports from a config file
const config = require("../config/config.json");

class GetUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(config.APIroot + this.props.subwhat)
      .then(res => {
        const posts = Array.from(res.data);
        this.setState({
          posts
        });
      })
      .catch(function(error) {
        console.log(error);
      })
  }


  render() {
    return (
      <div>

          <ul>
            <li className="listHeader"><Link to={"/"+this.props.subwhat}>{this.props.subwhat}</Link></li>
            {
              this.state.posts.map(post =>
              <li key={post._id}><Link to={"/"+this.props.subwhat+"/"+post._id}>{post.name}</Link></li>)
            }
          </ul>

      </div>
    );
  }
}

const Sidebar = () => (
  <div>
    <nav className="sidebar">
      <GetUsers subwhat="rooms"/>
      <GetUsers subwhat="users"/>
    </nav>
  </div>
)

export default Sidebar
