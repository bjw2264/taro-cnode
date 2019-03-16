import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Detail extends Component {
  config = {
    navigationBarTitleText: '详情页'
  }
  
  render() {
    return (
      <View>Detail: {this.$router.params.id}</View>
    )
  }
}

export default Detail