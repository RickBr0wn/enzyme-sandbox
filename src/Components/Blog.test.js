import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Blog from './Blog'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Blog {...props} />)

describe('<Blog />', () => {
  it('should should render without errors (using shallow)', () => {
    const component = setUp()
    console.log(component.debug())
    const wrapper = component.find('.blog-component')
    expect(wrapper.length).toBe(1)
  })
})
