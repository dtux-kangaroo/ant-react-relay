import {globalType} from './constant';
import { message as Message } from 'antd';
const userData = (data) => ({
  type: globalType.GET_USER_DATA,
  payload: data
})
export const getUserData = (params) => async (dispatch, getState , API) => {
  try {
      let response = await API.fetchUserData(params);
      if (response.success) {
        dispatch(userData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

const navData = (data) => ({
  type: globalType.GET_NAV_DATA,
  payload: data
})
export const getNavData = (params) => async (dispatch, getState,API) => {
  try {
      let response = await API.fetchNavData(params);
      if (response.success) {
        dispatch(navData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}


