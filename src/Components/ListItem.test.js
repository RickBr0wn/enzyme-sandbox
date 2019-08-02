import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListItem from './ListItem'
import { findByDataTestAttribute, checkPropTypesForErrors } from '../Helpers'
import { CONSTANTS } from '../Helpers/Constants'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<ListItem {...props} />)

describe('<ListItem />', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        title: CONSTANTS.TEST_STR,
        body: CONSTANTS.TEST_STR
      }

      expect(checkPropTypesForErrors(ListItem, expectedProps)).toBeUndefined()
    })
  })

  describe('Checking Render', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setUp({
        title: CONSTANTS.TEST_STR,
        body: CONSTANTS.TEST_STR
      })
    })

    it('should render without error', () => {
      const button = findByDataTestAttribute(wrapper, 'list-component')
      expect(button.length).toBe(1)
    })

    it('should render a title', () => {
      const title = findByDataTestAttribute(wrapper, 'list-component-title')
      expect(title.length).toBe(1)
    })

    it('should render the body', () => {
      const body = findByDataTestAttribute(wrapper, 'list-component-body')
      expect(body.length).toBe(1)
    })
  })

  describe('Should not render', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setUp({
        body: CONSTANTS.TEST_STR
      })
    })

    it('should not render without title prop', () => {
      const component = findByDataTestAttribute(wrapper, 'list-component')
      expect(component.length).toBe(0)
    })
  })
})
