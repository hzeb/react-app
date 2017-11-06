import React from 'react'
import {
  Link
} from 'react-router-dom'

import './index.less'

import {products, news} from './data.js'

class SideBar extends React.Component {
  render() {
    const { sideMenus, location } = this.props;
    return ( 
      <div className='SideBar'>
        <div className='menus'>
          <h3>{sideMenus.title}</h3>
          <ul> 
            {sideMenus.menus.map((m, index) => (
              <Link to={m.url} key={index} className={location.pathname.indexOf(m.url) !== -1 ? 'active' : ''}>
                <li>
                  {m.name}             
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='product'>
          <h3>推荐产品</h3>
          <ul> 
            {products.map((p, index) => (
              <Link to={p.url} key={index}>
                <li>
                  <img src={p.picture} width='83' height='74'/>
                  <p>{p.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='news'>
          <h3>推荐新闻</h3>
          <ul> 
            {news.map((n, index) => (
              <Link to={n.url} key={index}>
                <li>
                  <p>{n.time}</p>
                  <p>{n.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='phone_box'>
          <h3>全国免费咨询热线</h3>
          <h3>400-968-7033</h3>
        </div>

      </div>
    )
  }
}

export default SideBar
