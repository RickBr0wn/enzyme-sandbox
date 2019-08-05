import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../Reducers'
import { middlewares } from '../Store/createStore'

export const findByDataTestAttribute = (component, attribute) =>
  component.find(`[data-test='${attribute}']`)

export const checkPropTypesForErrors = (component, expectedProps) =>
  // eslint-disable-next-line react/forbid-foreign-prop-types
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
