import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import TodoItem from './TodoItem'

configure({ adapter: new Adapter() })

describe('<TodoItem />', () => {
  it('should render correctly', () => {
    const todoItemComponent = renderer.create(<TodoItem />)
    const tree = todoItemComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should return an `li` tag', () => {
    const todoItemComponent = shallow(<TodoItem />)
    const liTag = todoItemComponent.find('li')
    expect(liTag).toBeTruthy()
  })

  it('should return only 1 `li` tag', () => {
    const todoItemComponent = shallow(<TodoItem todo={'Testing'} />)
    expect(todoItemComponent.find('li')).toHaveLength(1)
  })

  it('should correctly display the props', () => {
    const todoItemComponent = shallow(<TodoItem todo={'Testing'} />)
    const li = <li className='todo-item'>Testing</li>
    expect(todoItemComponent.contains(li)).toBe(true)
  })
})
