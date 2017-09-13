import React from 'react';
import { login } from '../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
      this.props.login(this.state).then(
        (res) => this.context.router.push('/')
      );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { identifier } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input type="text" value={this.state.value} onChange={this.onChange} />
        </div>
        <div><button>Login</button></div>

      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm
