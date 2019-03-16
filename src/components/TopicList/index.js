import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { getTopicList, getPaginationList } from '../../actions'
import Topic from '../Topic'

import './index.less'

@connect(
  ({topic, menu}) => ({...topic, ...menu}),
  { getTopicList, getPaginationList }
)
class TopicList extends Component {

  componentDidMount() {
    this.props.getTopicList()
  }

  handleScrollToLower = () => {
    const { page, getPaginationList, currentMenu } = this.props
    getPaginationList({page:page+1,tab:currentMenu})
  }

  render() {
    const { list } = this.props
    return (
      <ScrollView 
        className="topic-list-wrapper"
        scrollY  
        onScrollToLower={this.handleScrollToLower}
      >
        {
          list.length?
          list.map(v => <View className="item" key={v.id}><Topic data={v} /></View>):
          null
        }
      </ScrollView>
    )
  }
}

export default TopicList