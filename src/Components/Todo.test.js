import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Todo from './Todo'

configure({ adapter: new Adapter() })

describe('<Todo />', () => {
  it('should render correctly', () => {
    const todoComponent = renderer.create(<Todo />)
    const tree = todoComponent.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display a list of todo items', () => {
    const todoComponent = shallow(<Todo />)
    const li = todoComponent.find('li')
  })
})
