import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg'
import searchIcon from '../../assets/search-icon.svg'
import { imageMap } from '../../assets/imageMap'



import './Header.css'

export class Header extends Component {

  logoutUser = () => {
    this.props.loginUser({})
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.props.searchMovies(value)
  }

  render() {
    const { user, activateLogin } = this.props;
    const randomNumber = Math.round(Math.random() * 2) + 1
    console.log(randomNumber)
  return(
    <header>
      <Link to='/'>
        <img className='logo' 
        src={logo} 
        alt='home logo'
        />
      </Link>
      <div className='controls-container'>
        <form role="search" 
        className="search-form"
        >
          <label>
            <input type="search" 
              onChange={this.handleSearch}
              style={{backgroundImage: `url(${searchIcon})`}}
              className="search-field" 
              placeholder="Search movies"  
              autoComplete='off'
              />
          </label>
          <input type="submit" 
          className="search-submit"
          />
        </form>
        {
          user.id && 
          <img className='tile' 
          src={imageMap[randomNumber]} alt='user tile' 
          onClick={this.logoutUser} 
          />
        }
        {
          !user.id &&
          <img className='tile logout' 
          src={imageMap[randomNumber]} 
          alt='user tile' 
          onClick={() => activateLogin()} 
          />
        }
      </div>
    </header>
  )
}
}

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(null, mapDispatchToProps)(Header);