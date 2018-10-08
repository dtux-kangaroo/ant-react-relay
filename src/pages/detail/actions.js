import {detailType} from './constant';
import { message as Message } from 'antd';

export const getDetailData = (params) => async (dispatch, getState , API) => {
  try {
      dispatch({
        type:detailType.SWITCH_LOADING_STATUS,
        payload:true
      });
      const  response = await API.fetchDetailData(params);
      const {data,success,message} =response
      if (success) {
          dispatch({
            type:detailType.SWITCH_LOADING_STATUS,
            payload:false
          });
          dispatch({
            type: detailType.GET_DETAIL_DATA,
            payload: data
          });
      } else {
        Message.error(message);
      }
  } catch (error) {
      console.log('error: ', error)
  }
}