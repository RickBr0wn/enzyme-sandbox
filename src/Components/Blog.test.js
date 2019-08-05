import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { store } from '../Store/createStore'
import { findByDataTestAttribute } from '../Helpers'
import { CONSTANTS } from '../Helpers/Constants'

import Blog from './Blog'

configure({ adapter: new Adapter() })

const setUp = (props = {}) =>
  shallow(
    <Provider store={store}>
      <Blog {...props} />
    </Provider>
  )

describe('<Blog />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setUp({
      title: CONSTANTS.TEST_STR,
      body: CONSTANTS.TEST_STR
    })
  })

  // it('should render with NO errors', () => {
  //   const component = findByDataTestAttribute(wrapper, 'blog-component')
  //   expect(component.length).toBe(1)
  // })

  it('should render', () => {})
})
