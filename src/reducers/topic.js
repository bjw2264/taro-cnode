import { GET_TOPIC_LIST } from '../constants'

const initState = {
  page: 1,
  list: [],
}

export default (state=initState, action) => {
  switch (action.type) {
    case GET_TOPIC_LIST:
      return {...state, page: ++state.page, list: [...action.payload.data]}
    default:
      return state
  }
}