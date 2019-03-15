import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { getTopicList } from '../../actions'
import Topic from './topic'

@connect(
  ({topic}) => ({...topic}),
  { getTopicList }
)
class TopicList extends Component {

  componentDidMount() {
    this.props.getTopicList()
  }

  render() {
    const { list } = this.props
    return (
      <View className="topic-list-wrapper">
        {
          list.length?
          list.map(v => <Topic key={v.id} />):
          null
        }
      </View>
    )
  }
}

export default TopicList