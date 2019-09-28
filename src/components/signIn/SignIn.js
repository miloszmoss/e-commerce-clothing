import React, { Component } from 'react';

import FormInput from '../formInput/FormInput';
import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
