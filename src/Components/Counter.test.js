import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Counter from './Counter'

configure({ adapter: new Adapter() })

const setUp = (props = {}) => {
  return shallow(<Counter {...props} />)
}

describe('<Counter />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setUp()
  })

  it('should start with a Count of zero with no props passed', () => {
    // const wrapper = shallow(<Counter />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })

  it('should start with the correct initialValue passed as props', () => {
    const wrapper = shallow(<Counter initialValue={10} />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 10')
  })

  it('should increment the counter by 1 when the increment button is pressed', () => {
    const wrapper = shallow(<Counter />)
    const incrementBtn = wrapper.find('button.increment')
    incrementBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 1')
  })

  it('should decrement the counter by 1 when the decrement button is pressed', () => {
    const wrapper = shallow(<Counter initialValue={1} />)
    const decrementBtn = wrapper.find('button.decrement')
    decrementBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })

  it('should not decrement past 0 when the decrement button is pressed', () => {
    const wrapper = shallow(<Counter />)
    const decrementBtn = wrapper.find('button.decrement')
    decrementBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })

  it('should match the snapshot', () => {
    const counterComponent = renderer.create(<Counter />).toJSON()
    expect(counterComponent).toMatchSnapshot()
  })

  it('should match the snapshot when { initialValue } is passed as a prop', () => {
    const counterComponent = renderer
      .create(<Counter initialValue={1} />)
      .toJSON()
    expect(counterComponent).toMatchSnapshot()
  })
})
