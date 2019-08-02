import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ title, body }) => {
  if (!title) return null
  return (
    <div data-test='list-component'>
      <p data-test='list-component-title'>{title}</p>
      <p data-test='list-component-body'>{body}</p>
    </div>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

export default ListItem
