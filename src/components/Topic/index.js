import Taro, {Component} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtAvatar } from 'taro-ui'

import './index.less'

@connect(
  ({catData}) => ({catData})
)
class Topic extends Component {
  formatTime = timeStr => {
    const timeObj = new Date(timeStr)
    const hours = timeObj.getHours()
    const minutes = timeObj.getMinutes()
    const days = hours / 24;
    return `${hours} 小时`
    // if (timeObj.getHours())
    // console.log('----h', hours)
    // if (days > 1) {
    //   return `${days} 天前`
    // }
    // if (hours > 0 && hours < 24) {
    //   return `${hours} 小时前`
    // }
    // if (minutes > 0 && minutes < 60) {
    //   return `${minutes} 分钟前`
    // }
  }

  goToDetail = id => {
    Taro.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  }
  
  render() {
    const {
      author,
      title,
      reply_count,
      visit_count,
      last_reply_at,
      top,
      good,
      tab,
      id,
    } = this.props.data
    const { catData } = this.props
    return (
      <View className="topic-wrapper" onClick={() => this.goToDetail(id)}>
        <AtAvatar image={author.avatar_url} size="small" />
        <Text className={`tab ${top?'top':''} ${good?'good':''}`}>{top ? '置顶' : (good ? '精华' : catData.find(v=>v.key===tab).value)}</Text>
        <View className="right">
          <View className="top">{title}</View>
          <View className="bottom">
            <Text className="author">{author.loginname}</Text>
            <Text className="visit">
              <Text className="reply">{reply_count}</Text>
              /
              <Text className="all">{visit_count}</Text>
            </Text>
            <Text className="time">{this.formatTime(last_reply_at)}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Topic