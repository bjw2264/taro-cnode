import { getTopics } from '../apis'
import { GET_TOPIC_LIST } from '../constants'

export const getTopicList = (params) => async dispatch => {
  const response = await getTopics(params)
  dispatch({
    type: GET_TOPIC_LIST,
    payload: response
  })
}