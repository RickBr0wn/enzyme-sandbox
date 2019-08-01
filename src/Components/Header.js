import React from 'react'
import logo from '../Assets/logo.png'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <header data-test='header-component'>
      <div className='container'>
        <div className='logo'>
          <img data-test='logo-image' src={logo} alt='blog logo' />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
