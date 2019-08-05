import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonText, emitEvent }) => {
  return (
    <button
      className='btn'
      data-test='button-component'
      onClick={emitEvent ? () => emitEvent() : null}>
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitEvent: PropTypes.func.isRequired
}

export default Button
