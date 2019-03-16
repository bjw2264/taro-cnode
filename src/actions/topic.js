import { getTopics } from '../apis'
import { GET_TOPIC_LIST, GET_PAGINATION_LIST } from '../constants'

export const getTopicList = (params) => async dispatch => {
  const response = await getTopics(params)
  dispatch({
    type: GET_TOPIC_LIST,
    payload: response
  })
}

export const getPaginationList = params => async dispatch => {
  const response = await getTopics(params)
  dispatch({
    type: GET_PAGINATION_LIST,
    payload: response
  })
}