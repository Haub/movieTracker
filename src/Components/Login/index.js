import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import PropTypes from 'prop-types';
import close from '../../assets/close.svg';
import './Login.css';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: false
    }
  }

  createUser = () => {
    this.setState({signUp: !this.state.signUp});
  }

  handleKeyPress = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  loginUser = async (event) => {
    const { signUp, name, email, password } = this.state;
    event.preventDefault();
    return signUp
      ? this.props.fetchUser(name, email, password)
      : this.props.fetchUser(null, email, password) 
  }

  handleSubmit = async (event) => {
    await this.loginUser(event)
    if (this.props.loading !== `Email & password don't match`) {
      this.props.activateLogin();
    }
  }

  render(){
    const { name, email, password, signUp } = this.state;
    const { loading } = this.props;
    const showError = loading === `Email & password don't match` || loading === `Login to add Favorites`
      ? loading
      : ''

    return (
      <div className='login-container'>
        <main className='login'>
          <img className='exit' 
            src={close} 
            alt='exit'
            onClick={() => this.props.activateLogin()}
            />
          <form className='login-form' onSubmit={this.handleSubmit}>
            <h1 className='signin-header'>{signUp ?  'Sign Up' : 'Sign In'}</h1>
            <input className='email-input' name='email' type='email' placeholder='Email' value={email} onChange={this.handleKeyPress} />
            <input className='password-input' name='password' type='password' placeholder='Password' value={password} onChange={this.handleKeyPress} />
            {
              signUp && 
              <article className='avatars'>
                <input className='name-input' type='text' name='name' placeholder='Name' value={name} onChange={this.handleKeyPress} />
              </article>
            } 
            <button className='sign-in-btn'>
              {signUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          {
            !signUp && 
            <div>
              <h4 className='error'>{showError}</h4>
              <p className='sign-up' onClick={this.createUser} ><span className='new-to'>New To MovieTracker? </span> Sign up now</p> 
            </div>
          }
        </main>
      </div>
    )
  }
} 

export const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchUser:(name, email, password) => dispatch(fetchUser(name, email, password))
})

const { object, string, func } = PropTypes;
Login.propTypes = {
  user: object,
  loading: string,
  fetchUser: func
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);