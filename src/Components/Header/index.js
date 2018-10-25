import React from 'react'
import logo from '../../assets/logo.svg'
import tile from '../../assets/superhero-a.svg'

import './Header.css'



export const Header = () => {
  return(
    <header>
      <img className='logo' src={logo} alt='home logo'/>
      <div className='controls-container'>
        <form role="search" class="search-form">
          <label>
            <input type="search" 
                  className="search-field" 
                  placeholder="Search movies"  
                  value="" name="s" 
                  autoComplete='off'
              />
          </label>
          <input type="submit" className="search-submit"/>
        </form>
        <img className='tile' src={tile} alt='user tile'/>
      </div>
    </header>
  )
}

export default Header;