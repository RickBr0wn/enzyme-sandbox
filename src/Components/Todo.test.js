import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import Todo from './Todo'

configure({ adapter: new Adapter() })

// describe('<Todo />', () => {
//   it('should render correctly', () => {
//     const todoComponent = renderer.create(<Todo />)
//     const tree = todoComponent.toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('should display a list of todo items', () => {
//     const todoComponent = shallow(<Todo />)
//     const li = todoComponent.find('li')
//   })
// })

describe('Using matchers', () => {
  describe('Common matchers', () => {
    // toBe() uses Object.is for equality
    // toEqual() is for deep-equality
    it('object assignment', () => {
      const data = { one: 1 }
      data['two'] = 2
      expect(data).toEqual({ one: 1, two: 2 })
    })

    test('adding positive numbers is not zero', () => {
      for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
          expect(a + b).not.toBe(0)
        }
      }
    })
  })

  describe('Truthiness', () => {
    test('null', () => {
      const n = null
      expect(n).toBeNull()
      expect(n).toBeDefined()
      expect(n).not.toBeUndefined()
      expect(n).not.toBeTruthy()
      expect(n).toBeFalsy()
    })

    test('zero', () => {
      const z = 0
      expect(z).not.toBeNull()
      expect(z).toBeDefined()
      expect(z).not.toBeUndefined()
      expect(z).not.toBeTruthy()
      expect(z).toBeFalsy()
    })
  })

  describe('Numbers', () => {
    test('two plus two', () => {
      const value = 2 + 2
      expect(value).toBeGreaterThan(3)
      expect(value).toBeGreaterThanOrEqual(3.5)
      expect(value).toBeLessThan(5)
      expect(value).toBeLessThanOrEqual(4.5)

      // toBe and toEqual are equivalent for numbers
      expect(value).toBe(4)
      expect(value).toEqual(4)
    })

    test('adding floating point numbers', () => {
      const value = 0.1 + 0.2
      // expect(value).toBe(0.3) //   This won't work because of rounding error
      expect(value).toBeCloseTo(0.3) // This works.
    })
  })

  describe('Strings', () => {
    test('there is no I in team', () => {
      expect('team').not.toMatch(/I/)
    })

    test('but there is a "stop" in Christoph', () => {
      expect('Christoph').toMatch(/stop/)
    })
  })

  describe('Arrays and iterables', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer'
    ]

    test('the shopping list has beer on it', () => {
      expect(shoppingList).toContain('beer')
      expect(new Set(shoppingList)).toContain('beer')
    })
  })

  // function compileAndroidCode() {
  //   throw new ConfigError('you are using the wrong JDK')
  // }

  // test('compiling android goes as expected', () => {
  //   expect(compileAndroidCode).toThrow()
  //   expect(compileAndroidCode).toThrow(ConfigError)

  //   // You can also use the exact error message or a regexp
  //   expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  //   expect(compileAndroidCode).toThrow(/JDK/)
  // })
})
