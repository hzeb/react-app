import React from 'react'
import { Carousel } from 'antd'
import Section from './Section'
import {
  Link
} from 'react-router-dom'

import './index.less'
import one from './img/1.png'
import two from './img/2.png'
import three from './img/3.jpg'

import {hotLists, slideLists} from './constant'

import Slide from './Slide'

class Home extends React.Component {
  render() {

    return (
      <div className='Home'>
        <Carousel autoplay>
          <div className='slide_img'><img src={one}  alt='1'/></div>
          <div className='slide_img'><img src={two}  alt='2'/></div>
          <div className='slide_img'><img src={three}  alt='3'/></div>
        </Carousel>
        <Section title='公司介绍' comment='company introduction' abstract='源自1996年 专注养生茶生产研发包装销售20余年'>
          <div className='intro_content'>
            <div className='company_left'>
              <h3>
                  湖南湘爵茶业有限公司 <i></i> <span>about</span>
              </h3>
              <h4><span>800</span>亩茶叶基地 <span>&nbsp;&nbsp;&nbsp;10000</span>平米GMP标准化厂房</h4>
              <p>
                  湖南湘爵茶业有限公司——办公地址位于楚汉名城、屈贾之乡、伟人故里--湖南长沙，员工300余人，拥有标准化化GMP车间、高品质工艺设备、成熟的产品配方，汤色工艺和效果在同类产品中名列前茅，是一家家集茶基地管理，茶叶、茶具的开发、生产、销售及茶叶品牌连锁为一体的大型现代化茶叶企业。
              </p>
            </div><div className='company_right'></div>
          </div>
        </Section>
        <Section title='产品中心' comment='product center' abstract='上千单品 涵盖六大类传统茶系列、湘爵养生茶系列、精美茶器系列'>
          <div className='intro_content'>
            <div className='product_left'></div>
            <div className='product_middle'></div>
            <div className='product_right'>
              <div className='product_right_top'></div>
              <div className='product_right_bottom'></div>
            </div>
          </div>
        </Section>
        <div className='hot_category'>
          <h2>热卖推荐</h2>
          <h3>Hot category</h3>
          <div className='Section'>
            <ul className='hot_list'>
              {hotLists.map(m => (
                <li>
                 <Link to={m.url}>
                   <img src={m.pitcture} alt=''/>
                 </Link>
                </li>
              ))}
            </ul>
          </div>
          <Slide list={slideLists} />
        </div>
      </div>
    )
  }
}

export default Home