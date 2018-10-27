
import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
import tile from '../../assets/superhero-a.svg'
import Login from '../Login';
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
        <button className='login-button' onClick={this.showLogin}>
          <img className='tile' src={tile} alt='user tile' />
          {
          this.state.childVisible
            ? <Login />
            : null
        }
        </button> 
      </div>
    </header>
  )
}
}

export default Header;