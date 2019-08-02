import checkPropTypes from 'check-prop-types'

export const findByDataTestAttribute = (component, attribute) =>
  component.find(`[data-test='${attribute}']`)

export const checkPropTypesForErrors = (component, expectedProps) =>
  // eslint-disable-next-line react/forbid-foreign-prop-types
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
