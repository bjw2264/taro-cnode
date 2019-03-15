import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import Menu from '../../components/Menu'
import TopicList from '../../components/TopicList'

import './index.less'


class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Menu />
        <TopicList />
      </View>
    )
  }
}

export default Index
