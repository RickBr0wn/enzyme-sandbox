import axios from 'axios'
import { TYPES } from './Types/types'
import { CONSTANTS } from '../Helpers/Constants'

export const fetchPosts = () => async dispatch => {
  await axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => dispatch({ type: TYPES.GET_POSTS, payload: res.data }))
    .catch(err => console.log('Error fetching posts', err))
}
