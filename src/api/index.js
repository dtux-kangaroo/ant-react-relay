import http from '../utils/http';
import apiUrl from 'constants/apis';
export default {
  //获取当前用户信息数据
  fetchUserData(params){
    return http.get(apiUrl.getUserData, params);
  },
  //获取导航栏数据
  fetchNavData(params){
    return http.get(apiUrl.getNavData, params);
  },
  //获取首页数据
  fetchHomeData(params){
    return http.get(apiUrl.getHomeData, params);
  },
  //获取用户列表数据
  fetchUserList(params){
    return http.get(apiUrl.getUserList,params);
  },
  //获取详情数据
  fetchDetailData(){
    return http.get(apiUrl.getDetailData, params);
  }

}