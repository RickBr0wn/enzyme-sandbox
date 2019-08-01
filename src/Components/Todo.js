import React from 'react'
import TodoItem from './TodoItem'
import uuid from 'react-uuid'

const intialValue = {
  todos: ['Go jogging', 'Ride a bike', 'Write more tests']
}

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const Todo = () => {
  const [state] = React.useReducer(reducer, intialValue)
  const { todos } = state
  return (
    <div className='todo-container'>
      <h1>TODO Component</h1>
      <ul>
        {todos.map(_todo => (
          <TodoItem todo={_todo} key={uuid()} />
        ))}
      </ul>
    </div>
  )
}

export default Todo
