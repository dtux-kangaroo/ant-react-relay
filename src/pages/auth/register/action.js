import {registerType} from './constant';
import { message as Message } from 'antd';

const registerData = (data) => ({
  type: registerType.GET_REGISTER_DATA,
  payload: data
})
export const submitRegisterData = (params) => async (dispatch, getState, API) => {
  try {
      let response = API.fetchHomeData(params);
      if (response.result) {
            dispatch(registerData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}

