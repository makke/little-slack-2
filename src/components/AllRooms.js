import React from 'react';
import axios from 'axios';

class GetData extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:4200/api/' + this.props.getwhat)
        .then(res => {
          //{alert(JSON.stringify(res.data))}
          const posts = Array.from(res.data);
          //const posts = res.data.map(obj => obj.data);
          this.setState({
            posts
          });
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    deleteVal() {
      // alert(this);
      axios.delete('http://localhost:4200/api/rooms/' + this)
        .then().catch(err => console.log(err))
      window.location.reload();
    }

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      if (window.confirm('Want to to add room ' + this.state.value + '?')) {
        axios.post('http://localhost:4200/api/rooms/', {
            name: this.state.value
          })
          .then( data => {
            this.setState({
              posts: this.state.posts.concat(data.data.data)
            });
          })
          .catch(err => console.log(err))
        // window.location.reload();
      }
    }

    render() {
      return (
        <div>
          <h1>{`All our ${this.props.getwhat}`}</h1>
          <ul>
            {
              this.state.posts.map(post =>
              <li key={post._id}>
                {post.name}
                <button onClick={this.deleteVal.bind(post._id)} >
                Delete</button>
              </li>)
            }
          </ul>
          <form onSubmit={this.handleSubmit}>
              Add new: <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Give new roomname" autoFocus />
          </form>
        </div>
      );
    }
  }


const Room = () => ( <
  GetData getwhat = "rooms" / >
)


export default Room