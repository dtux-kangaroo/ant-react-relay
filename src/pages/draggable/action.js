
import {applicationConfigType} from './constant';
import { message as Message} from 'antd';
const applicationConfigData = (data) => ({
  type: applicationConfigType.GET_APPLICATIONCONFIG_DATA,
  payload: data
})
export const getApplicationConfigData = (params) => async (dispatch, getState , API) => {
  try {
      let response = await API.fetchUserData(params);
      if (response.success) {
        dispatch(applicationConfigData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}
