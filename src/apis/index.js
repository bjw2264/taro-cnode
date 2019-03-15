import http from '../utils/Http'

const baseUrl = 'https://cnodejs.org/api/v1'
const apiUrl =  {
  topics: `${baseUrl}/topics`,
  topic: `${baseUrl}/topic/`,
  collect: `${baseUrl}/topic_collect/collect`,
  de_collect: `${baseUrl}/topic_collect/de_collect`,
  user_collect: `${baseUrl}/topic_collect/`,
  user: `${baseUrl}/user/`,
  accesstoken: `${baseUrl}/accesstoken`,
  unread_message: `${baseUrl}/message/count`,
  messages: `${baseUrl}/messages`,
  mark_all: `${baseUrl}/message/mark_all`,
  mark_one: `${baseUrl}/message/mark_one/`,
}

const getTopics = async (params) => {
  const response = await http.getFn(apiUrl.topics, params)
  return response.data
}

const getTopic = async id => {
  const response = await http.getFn(`${apiUrl.topic}${id}`)
  return response.data
}

export {
  getTopics,
  getTopic
}