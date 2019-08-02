import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Headline from './Headline'
import { findByDataTestAttribute } from '../Helpers'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Headline {...props} />)
const TEST_STR = 'Test String'

describe('<Headline />', () => {
  describe('with props', () => {
    let wrapper
    beforeEach(() => (wrapper = setUp({ header: TEST_STR, desc: TEST_STR })))

    it('should render without errors', () => {
      const component = findByDataTestAttribute(wrapper, 'headline-component')
      expect(component.length).toBe(1)
    })

    it('should render a h1', () => {
      const h1 = findByDataTestAttribute(wrapper, 'headline-header')
      expect(h1.length).toBe(1)
    })

    it('should render a description', () => {
      const desc = findByDataTestAttribute(wrapper, 'headline-desc')
      expect(desc.length).toBe(1)
    })
  })

  describe('without props', () => {
    let wrapper
    beforeEach(() => (wrapper = setUp()))

    it('should not render', () => {
      const component = findByDataTestAttribute(wrapper, 'headline-component')
      expect(component.length).toBe(0)
    })
  })
})
