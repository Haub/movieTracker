import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';



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

  handleSubmit = async (event) => {
    const { signUp, name, email, password, avatar } = this.state;
    event.preventDefault();
    return signUp
      ? this.props.fetchUser(name, email, password, avatar)
      : this.props.fetchUser(null, email, password) 
   
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
  fetchUser:(name, email, password, avatar) => dispatch(fetchUser(name, email, password, avatar))
})

export default connect (null, mapDispatchToProps)(Login);