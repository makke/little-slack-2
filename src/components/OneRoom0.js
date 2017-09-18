import React from 'react'
import axios from 'axios';
//import RoomAPI from '../services/api'

class RoomAPI extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        userName: "",
        roomName: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.setUsername = this.setUsername.bind(this);
      this.setRoomName = this.setRoomName.bind(this);

      //alert('oneroom:'+ this.props.route.userName);
      //alert ('oneroom:'+JSON.stringify(this.props));
      //alert (this.props.location.state.message);
      this.setRoomName(this.props.roomID);
    }

    componentDidMount() {
      let url='http://localhost:4200/api/rooms/'+this.props.roomID+'/messages';
      axios.get(url)
        .then(res => {
          //{alert(JSON.stringify(res.data))}
          const posts = Array.from(res.data);
          //const posts = res.data.map(obj => obj.data);
          //alert(JSON.stringify(res));
          this.setState({
            posts
          });
        })
        .catch(function(error) {
          console.log(error);
        })

        //this.setUsername("59be1021fbd96e61f869c9aa");
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      let url='http://localhost:4200/api/rooms/'+this.props.roomID+'/messages';
      axios.post(url, {
          author: "59be4db95b4d656e3661f6a2",  // change to props.userName or something..
          text: this.state.value
        })
        .catch(err => console.log(err))
      window.location.reload();
    }

    setUsername(userID) {
      axios.get('http://localhost:4200/api/users/'+userID, {
        params: {
          id: userID
        }
      })
      .then(res => {
        // If there is no match? Set name = "anonymous"
        // if ('name' in res.data) {this.setState({userName: res.data.name});}
        // else {this.setState({userName: "anonymous"});}
        this.setState({userName: res.data.name});
      })
      .catch(function (error) {
          console.log(error);
      });
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

    render() {
      return (
        <div>
          <h1>{this.state.roomName} Room</h1>
          <ul>
            {
              this.state.posts.map(post =>
              <li key={post._id} >
                {this.setUsername(post.author)} [{this.state.userName}] {post.text}
              </li>)
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
              Add new: <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Write something" autoFocus />
          </form>
        </div>
      );
    }
  }

const OneRoom = (props) => (

    <div>
      <RoomAPI roomID = {props.match.params.number} />
    </div>

)

export default OneRoom
