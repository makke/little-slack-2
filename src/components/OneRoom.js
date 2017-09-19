import React from 'react';
import axios from 'axios';


class RoomAPI extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: [],    // all the messages
        roomName: "",  // current room
        userID: "", // current user _id
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setRoomName = this.setRoomName.bind(this);

      this.setRoomName(this.props.roomID);
      this.setUserID(this.props.userName);

      // Add a timer to update state (refresh chat) regularly
    }

    componentDidMount() {
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
      let url='http://localhost:4200/api/rooms/'+this.props.roomID+'/messages';
      // alert('this.state.value: '+this.state.value+', this.state.userID: '+this.state.userID);
      axios.post(url, {
          text: this.state.value,
          author_id: this.state.userID
          // target: this.props.roomID
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
          <ul>
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

  constructor(props) {
    super(props);
    // console.log(JSON.stringify(this.props));
  }

  render() {
    return (
      <div>
        <RoomAPI roomID = {this.props.match.params.number} userName = {this.props.userName} />
      </div>
    );
  }
}


export default OneRoom


///////////////////////////////////////

    // setUsername(post, userID) {
    //   axios.get('http://localhost:4200/api/users/'+userID, {
    //     params: {
    //       id: userID
    //     }
    //   })
    //   .then(res => {
    //     // If there is no match? Set name = "anonymous"
    //     // if ('name' in res.data) {this.setState({userName: res.data.name});}
    //     // else {this.setState({userName: "anonymous"});}
    //     // we should update the state after response...
    //     let posts = this.state.posts;
    //     // console.log(JSON.stringify(posts));
    //     // alert(JSON.stringify(posts));
    //     let index = posts.findIndex(x => x._id==userID);
    //     // alert(index);
    //     if (index==-1) { this.setState({userName: "anonymous"}); }
    //       else {this.setState({userName: res.data.name});}
    //     // alert(this.state.userName);
    //     // console.log(JSON.stringify(posts));
    //     console.log(res)
    //     post.userName = res.data.name})
    //   .catch(function (error) {
    //       console.log(error);
    //   });
    // }
