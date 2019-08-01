import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo }) => {
  return <li className='todo-item'>{todo}</li>
}

TodoItem.propTypes = {
  todo: PropTypes.string
}

export default TodoItem
