import { TYPES } from '../Actions/Types/types'

export default (state = [], { type, payload }) => {
  switch (type) {
    case TYPES.GET_POSTS:
      return Object.assign([], state, payload)
    default:
      return state
  }
}
