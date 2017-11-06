import React from 'react'
import { Breadcrumb  as AntdBreadcrumb } from 'antd'
import './index.less'

import BreadcrumbNames from './BreadcrumbNames'

const Item = AntdBreadcrumb.Item;

class Breadcrumb extends React.Component {
  render() {
    let paths = this.props.location.pathname.split('/').slice(1);
    return ( 
      <div className='Breadcrumb'>
        当前所在位置：
        <AntdBreadcrumb separator=">">
          {paths.map((p, index) => (
            <Item key={index}>{BreadcrumbNames[p]}</Item>
          ))}
        </AntdBreadcrumb>
      </div>
    )
  }
}

export default Breadcrumb
