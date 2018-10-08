import {loginType} from './constant';
import { message as Message } from 'antd';

const loginData = (data) => ({
  type: loginType.GET_LOGIN_DATA,
  payload: data
})
export const getLoginData = (params) => async (dispatch, getState , API) => {
  try {
      let response = await API.fetchUserData(params);
      if (response.result) {
        dispatch(loginData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

