import React from 'react'
import './index.less'
import Breadcrumb from 'COMPONENT/Breadcrumb'
import SideBar from 'COMPONENT/SideBar'
import contact from './img/contact.png'

class ContactUs extends React.Component {
  render() {
    const sideMenus =  {
      title: '联系我们',
      menus: [{
        name: '联系方式',
        url: '/contactus/phone'
      }
    ]}
    return (
      <div className='ContactUs'>
        <div className='header_img'></div>
        <div className='content_area'>
          <div className='aside'>
            <SideBar sideMenus={sideMenus} location={this.props.location}></SideBar>
          </div>
          <div className='main_area'>
            <Breadcrumb location={this.props.location}/>
            <div className='contact_content'>
              <img src={contact} alt='contact' />
              <div className='contact_area'>
                <h2>广东御品茶缘茶叶有限公司</h2>
                <h4>联系电话：400-851-6589</h4>
                <h4>地址：广州市白云区石井街道石井大厦1号楼1503</h4>
              </div>
            </div>
          </div>   
        </div>
      </div>
    )
  }
}

export default ContactUs