import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button'
import { findByDataTestAttribute, checkPropTypesForErrors } from '../Helpers'
import { CONSTANTS } from '../Helpers/Constants'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => shallow(<Button {...props} />)

describe('<Button />', () => {
  describe('Checking PropTypes', () => {
    it('should NOT throw a warning', () => {
      const expectedProps = {
        buttonText: CONSTANTS.TEST_STR,
        emitFunction: () => {}
      }

      expect(checkPropTypesForErrors(Button, expectedProps)).toBeUndefined()
    })
  })

  describe('Checking render', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setUp({
        buttonText: CONSTANTS.TEST_STR,
        emitFunction: CONSTANTS.TEST_FUNC
      })
    })

    it('should render a button', () => {
      const button = findByDataTestAttribute(wrapper, 'button-component')
      expect(button.length).toBe(1)
    })
  })
})
