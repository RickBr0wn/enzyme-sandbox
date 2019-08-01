import React from 'react'

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = React.useState(initialValue || 0)
  return (
    <div>
      <p>{`Count: ${counter}`}</p>
      <div>
        <button className='increment' onClick={() => setCounter(counter + 1)}>
          +
        </button>
        <button
          className='decrement'
          onClick={() => (counter === 0 ? null : setCounter(counter - 1))}>
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
