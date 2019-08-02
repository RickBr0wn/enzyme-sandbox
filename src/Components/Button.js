import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonText, emitFunction }) => {
  return (
    <button
      className='btn'
      data-test='button-component'
      onClick={() => (emitFunction ? emitFunction() : null)}>
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitFunction: PropTypes.func.isRequired
}

export default Button
