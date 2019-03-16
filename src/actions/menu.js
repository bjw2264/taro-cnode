import { CHANGE_DRAWER_STATUS, CHANGE_MENU } from '../constants'
import { getTopicList } from './topic'

export const changeDrawerStatus = () => ({
  type: CHANGE_DRAWER_STATUS,
})

export const changeMenu = selectedMenu => dispatch => {
  dispatch(getTopicList({page:1,tab:selectedMenu}))
  dispatch({
    type: CHANGE_MENU,
    payload: selectedMenu,
  })
}