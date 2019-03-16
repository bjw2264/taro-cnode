import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtDrawer } from 'taro-ui'

import { changeDrawerStatus, changeMenu } from '../../actions'

import './index.less'

import userIcon from '../../assets/images/gongzuozu-.png'
import moreIcon from '../../assets/images/mulu-.png'


@connect(
  ({ menu, catData }) => ({ menu, catData }),
  { changeDrawerStatus, changeMenu }
)
class Menu extends Component {
  handleItemClick = index => {
    const {catData, menu, changeMenu} = this.props
    const currentCat = catData[index].key
    if (currentCat !== menu.currentMenu) {
      changeMenu(currentCat)
    }
  }
  
  render() {
    const { menu, catData, changeDrawerStatus, changeMenu } = this.props
    const currentTitle = catData.find(v => v.key === menu.currentMenu).value
    return (
      <View className="menu-wrapper">
        <View className="drawer">
          <AtDrawer 
            show={menu.isShowMenu} 
            items={catData.map(v => v.value)} 
            onClose={changeDrawerStatus} 
            onItemClick={this.handleItemClick}  
          />
        </View>
        <Image src={moreIcon} onClick={changeDrawerStatus} className="img left" />
        <Text className="title">{currentTitle}</Text>
        <Image src={userIcon} className="img right" />
      </View>
    )
  }
}

export default Menu