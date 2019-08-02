import postsReducer from './postsReducer'
import { TYPES } from '../Actions/Types/types'
import { CONSTANTS } from '../Helpers/Constants'

describe('Posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('should return new state if recieving type', () => {
    const posts = [
      { title: CONSTANTS.TEST_STR },
      { title: CONSTANTS.TEST_STR },
      { title: CONSTANTS.TEST_STR }
    ]

    const newState = postsReducer(undefined, {
      type: TYPES.GET_POSTS,
      payload: posts
    })

    expect(newState).toEqual(posts)
  })
})
