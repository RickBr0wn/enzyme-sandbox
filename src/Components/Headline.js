import React from 'react'

class Headline extends React.Component {
  render() {
    const { header, desc } = this.props
    if (!header) return null

    return (
      <div data-test='headline-component'>
        <h1 data-test='headline-header'>{header}</h1>
        <p data-test='headline-desc'> {desc}</p>
      </div>
    )
  }
}

export default Headline
