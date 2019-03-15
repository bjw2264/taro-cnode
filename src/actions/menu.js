import { CHANGE_DRAWER_STATUS, CHANGE_MENU } from '../constants'

export const changeDrawerStatus = () => ({
  type: CHANGE_DRAWER_STATUS,
})

export const changeMenu = selectedMenu => ({
  type: CHANGE_MENU,
  payload: selectedMenu,
})