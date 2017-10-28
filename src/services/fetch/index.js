import request from './fetch'
import { urlBase, errors} from './config'
import showMessage from 'UTIL/globalTips/showMessage'

const gotoLoginPage = () => window.location.href =window.location.origin + '/adminLogin';

/**
 * 将json形式的参数拼接成以&连接的url参数字符串
 * @param  {object} params
 * @return {string}
 */
const makeQueryString = (params) => {
  let queryString = ''
  if(params){
    Object.keys(params).forEach((key, i) => {
      const value = params[key]
      if(i > 0){
        queryString += '&'
      }
      queryString += `${key}=${value === null || value === undefined ? '' : value}`
    })
  }
  return queryString
}

/**
 * 错误处理
 * @param  {object}  //自定义的错误信息，具体参见UTIL/config/errors
 * @param  {boolean?}  noTips  是否不显示错误提示
 */
let loginTimeoutHandled
const handleError = (e, noTips) => {
  if (e.errorType === 3) {
    if (!loginTimeoutHandled) {
      showMessage(e.text)
      gotoLoginPage()
      //setTimeout(gotoLoginPage, 500)
      loginTimeoutHandled = true
    }
  } else {
    if(!noTips){
      showMessage(e.text)
    }
    throw e
  }
}

/**
 * 解析请求返回数据
 * @param  {object}   //respone对象
 * @return {any}  //请求的返回数据
 */
const parseRespone = (res) => {
  const { dataType, data } = res
  if(dataType){
    if(dataType === 'json'){
      if(!('resultCode' in data)){
        return data
      }else if(data.resultCode === 0){
        return data
      }else if(data.resultMessage){
        throw Object.assign({}, errors.systemError, {text: data.resultMessage})
      }else{
        throw errors.systemError
      }
    }else if(dataType === 'text' && data.indexOf('<!DOCTYPE html>') >= 0){
      throw errors.loginTimeout
    }else{
      return data
    }
  }else{
    throw res
  }
}

/**
 * 发起GET方式的http请求
 * @param  {string}  url  请求的url，不包含前缀以及参数，如：StudentController/editStudent.do
 * @param  {object?}  params  对象形式的参数
 * @param  {boolean?}  noTips  是否不显示错误提示
 * @return {Promise}
 */
async function httpGet({ url, params }, noTips){
  const qs = makeQueryString(params)
  try{
    const res = await request(urlBase + url + (qs ? '?' + qs : ''), { method: 'GET' })
    return parseRespone(res)
  }catch(e){
    handleError(e, noTips)
  }
}

/**
 * 发起POST方式的http请求
 * @param  {string}  url  请求的url，不包含前缀，如：StudentController/editStudent.do
 * @param  {object?}  params  对象形式的参数
 * @param  {boolean?}  noTips  是否不显示错误提示
 * @return {Promise}
 */
async function httpPost({ url, data, opt = {} }, noTips){
  try{
    let options = {
      method: 'POST',
      body: data,
      ...opt
    }
    const res = await request(urlBase + url, options)
    return parseRespone(res)
  }catch(e){
    handleError(e, noTips)
  }
}

export {
  httpGet,
  httpPost,
}
