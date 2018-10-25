import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser, loginUser } from '../../actions';
import { addUser, getUser } from '../../utils';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: false,
      avatar: '',
      error: ''
    }
  }

  createUser = () => {
    this.setState({signUp: !this.state.signUp})
  }

  handleKeyPress = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = async () => {
    const { signUp, name, email, password, avatar } = this.state;
    const user = signUp
      ? await addUser(name, email, password, avatar)
      : await getUser(email, password) 
    if (typeof user === 'string') {
      this.setState({ error: user })
    } else {
      this.props.loginUser(user)
    }
  }

  render(){
    const { name, email, password, signUp } = this.state;
    return (
      <main className='login'>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <input name='email' type='email' placeholder='Email' value={email} onChange={this.handleKeyPress} />
          <input name='password' type='password' placeholder='Password' value={password} onChange={this.handleKeyPress} />
          {
            signUp && 
            <article className='avatars'>
              <input type='text' name='name' placeholder='Name' value={name} onChange={this.handleKeyPress} />
              <img />
              <img />
              <img />
            </article>
          } 
          <button>
            {signUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        {
          !signUp && 
          <a href='#' onClick={this.createUser}>Sign Up</a>
          
        }
      </main>
    )
  }

}  

const mapDispatchToProps = (dispatch) => ({
  loginUser:(email, password) => dispatch(loginUser(email, password))
})

export default connect (null, mapDispatchToProps)(Login);