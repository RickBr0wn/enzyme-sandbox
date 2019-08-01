import React from 'react'
import logo from '../Assets/logo.png'
import PropTypes from 'prop-types'

const Blog = props => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <img src={logo} alt='blog logo' />
        </div>
      </div>
    </header>
  )
}

Blog.propTypes = {}

export default Blog
