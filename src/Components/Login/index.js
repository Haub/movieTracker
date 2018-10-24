import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      signUp: false,
      avatar: ''
    }
  }

  createUser = () => {
    this.setState({signUp: !this.state.signUp})
  }

  handleKeyPress = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  render(){
    const { email, password, signUp }
    return (
      <form className='log-in' onSubmit={}>
        <input name='email' type='email' value={email} onChange={this.handleKeyPress} />
        <input name='password' type='password' value={password} onChange={this.handleKeyPress} />
        {
          signUp && 
          <img />
          <img />
          <img />
        } 
        <button>
          {signUp ? 'login' : 'Sign Up'}
        </button>
      </form>
      <a onClick={this.createUser}>Sign Up</a>
    )
  }


}  

export default Login;