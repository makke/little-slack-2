import React from 'react';
import axios from 'axios';

class GetData extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        value: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteVal = this.deleteVal.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:4200/api/' + this.props.getwhat)
        .then(res => {
          //console.log(JSON.stringify(res.data))}
          const posts = Array.from(res.data);
          // console.log(posts)
          this.setState({
            posts
          });
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    deleteVal(postID) {
      axios.delete('http://localhost:4200/api/users/' + postID)
        .then((res) => {
          // we should update the state after response...
          let posts = this.state.posts;
          // console.log(JSON.stringify(posts));
          let index = posts.findIndex(x => x._id===postID);
          posts.splice(index, 1);
          // console.log(JSON.stringify(posts));
          this.setState({
            // debugger;
            posts
          });
        })
        .catch(err => console.log(err))
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
      // this.name = event.target.value;
    }

    handleSubmit(event) {
      event.preventDefault();
      if (window.confirm('Want to add user ' + this.state.value + '?')) {
        axios.post('http://localhost:4200/api/users/', {
            name: this.state.value
          })
          .then( data => {
            if (data.data.hasOwnProperty('errmsg')) {alert("Sorry: "+data.data.errmsg)}
            else {
              this.setState({
                posts: this.state.posts.concat(data.data.data)
              });
            }
          })
          .catch(err => console.log(err))
      }
    }

    render() {
      return (
        <div>
          <h1>{'All our '+this.props.getwhat}</h1>
          <ul>
            {
              this.state.posts.map(post =>
              <li key={post._id}>
                {post.name}
                  <button onClick={() => { this.deleteVal(post._id) }}>
                    Delete
                  </button>
              </li>)
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
              Add new: <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Give new username" autoFocus />
          </form>
        </div>
      );
    }
}


const User = () => (
  <GetData getwhat = "users" / >
)


export default User
