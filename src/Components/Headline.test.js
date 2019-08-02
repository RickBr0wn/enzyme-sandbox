import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Headline from './Headline'
import { findByDataTestAttribute, checkPropTypesForErrors } from '../Helpers'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Headline {...props} />)
const TEST_STR = 'Test String'
const TEST_NUM = 1
const TEST_BOOL = false

describe('<Headline />', () => {
  describe('PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: TEST_STR,
        desc: TEST_STR,
        postedBy: [
          {
            fName: TEST_STR,
            lName: TEST_STR,
            email: TEST_STR,
            age: TEST_NUM,
            online: TEST_BOOL
          }
        ]
      }

      expect(checkPropTypesForErrors(Headline, expectedProps)).toBe(undefined)
    })
  })

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
