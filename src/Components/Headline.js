import React from 'react'
import PropTypes from 'prop-types'

const Headline = ({ header, desc, postedBy }) => {
  if (!header) return null

  return (
    <div data-test='headline-component'>
      <h1 data-test='headline-header'>{header}</h1>
      <p data-test='headline-desc'> {desc}</p>
    </div>
  )
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  postedBy: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      online: PropTypes.bool
    })
  )
}

export default Headline
