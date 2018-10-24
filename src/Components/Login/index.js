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
    const { email, password, signUp } = this.state;
    return (
      <main className='login'>
        <form className='login-form'>
          <input name='email' type='email' value={email} onChange={this.handleKeyPress} />
          <input name='password' type='password' value={password} onChange={this.handleKeyPress} />
          {
            signUp && 
            <article className='avatars'>
              <img />
              <img />
              <img />
            </article>
          } 
          <button>
            {signUp ? 'login' : 'Sign Up'}
          </button>
        </form>
        <a onClick={this.createUser}>Sign Up</a>
      </main>
    )
  }


}  

export default Login;