
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import tile from '../../assets/superhero-a.svg'
import searchIcon from '../../assets/search-icon.svg'

import './Header.css'

class Header extends Component{
  constructor() {
    super()
    this.state = {
      childVisible: false
    }
  }

  showLogin = () => {
    this.setState({childVisible: !this.state.childVisible});
  }

  render() {
  return(
    <header>
      <img className='logo' src={logo} alt='home logo'/>
      <div className='controls-container'>
        <form role="search" className="search-form">
          <label>
            <input type="search" 
              style={{backgroundImage: `url(${searchIcon})`}}
              className="search-field" 
              placeholder="Search movies"  
              autoComplete='off'
              />
          </label>
          <input type="submit" className="search-submit"/>
        </form>
        <NavLink to='./login' className='login-button' >
          <img className='tile' src={tile} alt='user tile' />
        </NavLink> 
      </div>
    </header>
  )
}
}

export default Header;