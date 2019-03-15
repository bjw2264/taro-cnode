import { combineReducers } from 'redux'
import menu from './menu'
import topic from './topic'

const initState = [
  {key: 'all', value: '全部'},
  {key: 'good', value: '精华'},
  {key: 'share', value: '分享'},
  {key: 'ask', value: '问答'},
  {key: 'job', value: '招聘'},
  {key: 'dev', value: '客户端测试'},
]

export default combineReducers({
  catData: () => initState,
  menu,
  topic,
})
