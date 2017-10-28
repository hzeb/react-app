import { message } from 'antd'

export default function showMessage(text, type) {
  if(type && type === 'success'){
    message.success(text)
  }else{
    message.error(text)
  }
}