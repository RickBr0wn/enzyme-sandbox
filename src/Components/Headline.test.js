import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Headline from './Headline'
import { findByDataTestAttribute, checkPropTypesForErrors } from '../Helpers'
import { CONSTANTS } from '../Helpers/Constants'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Headline {...props} />)

describe('<Headline />', () => {
  describe('PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: CONSTANTS.TEST_STR,
        desc: CONSTANTS.TEST_STR,
        postedBy: [
          {
            fName: CONSTANTS.TEST_STR,
            lName: CONSTANTS.TEST_STR,
            email: CONSTANTS.TEST_STR,
            age: CONSTANTS.TEST_NUM,
            online: CONSTANTS.TEST_BOOL
          }
        ]
      }

      expect(checkPropTypesForErrors(Headline, expectedProps)).toBe(undefined)
    })
  })

  describe('with props', () => {
    let wrapper
    beforeEach(
      () =>
        (wrapper = setUp({
          header: CONSTANTS.TEST_STR,
          desc: CONSTANTS.TEST_STR
        }))
    )

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
