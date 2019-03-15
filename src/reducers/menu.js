import { CHANGE_DRAWER_STATUS, CHANGE_MENU } from '../constants'


export default (state={isShowMenu:false,currentMenu:'all'}, action) => {
  switch (action.type) {
    case CHANGE_DRAWER_STATUS:
      return {...state, isShowMenu: !state.isShowMenu}    
    case CHANGE_MENU:
      return {...state, currentMenu: action.payload}
    default:
      return state
  }
}