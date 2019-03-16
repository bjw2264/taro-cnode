import { GET_TOPIC_LIST, GET_PAGINATION_LIST } from '../constants'

const initState = {
  page: 1,
  list: [],
}

export default (state=initState, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return {...state, page: 1, list: [...action.payload.data]}
    case GET_PAGINATION_LIST:
      return {...state, page: state.page + 1, list: [...state.list ,...action.payload.data]}
    default:
      return state
  }
}