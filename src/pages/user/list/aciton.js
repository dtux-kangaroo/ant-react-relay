import {listType} from './constant';
import { message as Message} from 'antd';

const userList = (data) => ({
  type: listType.GET_DATA,
  payload: {
    data,
    reload:true
  }
})
export const getUserList = (params) => async (dispatch, getState , API) => {
  try {
      let response = await API.fetchUserList(params);
      if (response.result) {
        dispatch(userList(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}
