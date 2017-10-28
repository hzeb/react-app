import {httpPost} from './fetch/index'

/**
 * [login 登录接口]
 * @param  {[String]} username  [用户名]
 * @param  {[String]} password  [密码]
 * @return {[promise]}    
 **/
export const login = ({userName, password}) => {
  var data = new FormData();
  data.append('account', userName);
  data.append('password', password);
  data.append('remember', false);
  return httpPost({url:'/login', data});
}

export default login;
