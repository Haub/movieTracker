import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg'
import tile from '../../assets/superhero-a.svg'
import searchIcon from '../../assets/search-icon.svg'

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
  return(
    <header>
      <Link to='/'>
        <img className='logo' src={logo} alt='home logo'/>
      </Link>
      <div className='controls-container'>
        <form role="search" className="search-form">
          <label>
            <input type="search" 
              onChange={this.handleSearch}
              style={{backgroundImage: `url(${searchIcon})`}}
              className="search-field" 
              placeholder="Search movies"  
              autoComplete='off'
              />
          </label>
          <input type="submit" className="search-submit"/>
        </form>
        {
          user.id && 
          <img className='tile' src={tile} alt='user tile' onClick={this.logoutUser} />
        }
        {
          !user.id &&
          <img className='tile' src={tile} alt='user tile' onClick={() => activateLogin()} />
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