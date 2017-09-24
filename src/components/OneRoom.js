import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';

class RoomAPI extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: [],    // all the messages
        roomName: "",  // current room
        userID: "", // current user _id
        value: ""
      };

      // Connect to the socket.io server
      this.socket = io('http://localhost:4008').connect();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setRoomName = this.setRoomName.bind(this);

      this.setRoomName(this.props.roomID);
      this.setUserID(this.props.userName);

      // Listen for socket.io messages from the server
      this.socket.on('server:message', message => {
        const posts = this.state.posts;
        posts.push(message);
        // console.log(posts);
        this.setState({ posts });
      });
    }

    componentDidMount() {
      // Get all the messages for this room
      let url='http://localhost:4200/api/rooms/'+this.props.roomID+'/messages';
      axios.get(url)
        .then(res => {
          //console.log(JSON.stringify(res.data))}
          const posts = Array.from(res.data);

          // // Loop through posts and add username based on id
          // posts.forEach(post => {
          //   this.setUsername(post, post.authorID);
          //   // posts.push(username : this.state.userName);
          // })

          // console.log(posts)
          this.setState({
            posts
          });
        })
        .catch(function(error) {
          console.log(error);
        })

    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }


    handleSubmit(event) {
      event.preventDefault();
      // let make a socket.io message
      const messageObject = {
        text: this.state.value,
        author_id: this.state.userID,
        author: {name: this.props.userName},
        target: this.props.roomID
      };
      // Emit the message to Socket.io
      this.socket.emit('client:message', messageObject);
      messageObject.fromMe = true; // Unneccessary??
      // Send another message to to MongoDB
      let url='http://localhost:4200/api/rooms/'+this.props.roomID+'/messages';
      axios.post(url, {
          text: this.state.value,
          author_id: this.state.userID,
          target: this.props.roomID
        })
        .then( data => {
          // console.log(data.data.data)
          this.setState({
            posts: this.state.posts.concat(data.data.data) // also concat this.props.userName
          });
        })
        .catch(err => console.log(err))
    }

    setRoomName(roomID) {
      axios.get('http://localhost:4200/api/rooms/'+roomID, {
        params: {
          id: roomID
        }
      })
      .then(res => {
        this.setState({roomName: res.data.name});
      })
      .catch(function (error) {
          console.log(error);
      });
    }

    setUserID(userName) {
      axios.get('http://localhost:4200/api/user/'+userName)
      .then(res => {
        this.setState({userID: res.data._id});
      })
      .catch(function (error) {
          console.log(error);
      });
    }

    render() {
      return (
        <div>
          <h1>{this.state.roomName} Room</h1>
          <ul className="chatflow">
            {
              this.state.posts.map(post =>
              <li key={post._id}>
                [{post.author.name}] {post.text}
              </li>)
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
              Comment: <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Write something" autoFocus />
          </form>
        </div>
      );
    }
}


class OneRoom extends React.Component {

  render() {
    return (
      <div>
        <RoomAPI roomID = {this.props.match.params.number} userName = {this.props.userName} />
      </div>
    );
  }
}


export default OneRoom
