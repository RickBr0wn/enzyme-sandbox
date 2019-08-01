import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
import { findByDataTestAttribute } from '../Helpers'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Header {...props} />)

describe('<Header />', () => {
  let component
  beforeEach(() => (component = setUp()))

  it('should should render without errors', () => {
    const wrapper = findByDataTestAttribute(component, 'header-component')
    expect(wrapper.length).toBe(1)
  })

  it('should render a logo)', () => {
    const wrapper = findByDataTestAttribute(component, 'logo-image')
    expect(wrapper.length).toBe(1)
  })
})
