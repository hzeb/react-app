import React from 'react'
import './Contact.less'
import ewm1 from './img/ewm1.png'
import ewm2 from './img/ewm2.png'

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <div className="middle_box">
            <h2 style={{fontSize:'22px',color: '#b29462'}}>湖南湘爵茶业有限公司</h2>
            <h4>联系电话：400-968-7033 </h4>
            <h4>联系QQ：1659895762</h4>
            <h4>邮箱：1659895762@qq.com</h4>
            <h4>地址：长沙市芙蓉区隆平高科技园雄天路98号3号楼7层</h4>

            <div className="ewm">
              <img src={ewm1} alt=""/>
              <p>关注湘爵微信公众号 </p>
              <p className="zongse">可了解更多加盟信息</p>
            </div>
            <div className="ewm">
              <img src={ewm2} alt="" style={{width: "105px"}} />
              <p>扫码浏览移动端网站</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Contact;
