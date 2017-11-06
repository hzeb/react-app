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

import new_title from './img/new_title.png'
import news_img from './img/news.png'
import trends_img from './img/trends.png'

import {hotLists, slideLists, stores, joins, news, trends} from './constant'

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
                  广东御品茶缘茶叶有限公司<i></i> <span>about</span>
              </h3>
              <h4><span>800</span>亩茶叶基地 <span>&nbsp;&nbsp;&nbsp;10000</span>平米GMP标准化厂房</h4>
              <p>
                御品茶缘是集茶文化研究，茶叶产业链发掘和茶艺推广传播为一体的健康、养生、商业品牌孵化的专业机构，隶属于香港影响力集团旗下大中华区的子公司体系，前身紧随中国互联网大潮崛起成立了高档茶文化会所和私董明星俱乐部，着力于聚合在茶文化领域的爱茶、奉茶、乐茶人士的高端资源溯源，为目前众多的品牌机构打造一体化的养生品茗会所及文化传媒策划输出，形成人文，养生，文艺及品牌策划为矩阵
              </p>
            </div><div className='company_right'></div>
          </div>
        </Section>

        <Section title='产品中心' comment='product center' abstract='上千单品 涵盖六大类传统茶系列、御品茶缘养生茶系列、精美茶器系列'>
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
              {hotLists.map((m, index) => (
                <li key={index}>
                 <Link to={m.url}>
                   <img src={m.pitcture} alt=''/>
                 </Link>
                </li>
              ))}
            </ul>
          </div>
          <Slide list={slideLists} />
        </div>

        <Section title='店面展示' comment='Store display' abstract='终端门店 强势覆盖一二线城市，填补茶叶终端门店市场'>
          <div className='intro_content stores_content'>
            {stores.map((s, index) => (
              <Link to={s.url} key={index}>
                <div className='store_box'>
                  <img src={s.pitcture} alt='' width='220'/>
                  <p>御品茶缘连锁店</p>
                </div>                
              </Link>
            ))}
            <div className='hot_line'></div><Link to='/'><div className='more'>点击查看更多 more+</div></Link>
            <p>Every shop makes money,Good customer reputation</p>
          </div>
        </Section>

        <Section title='招商加盟' comment='Merchants join' abstract='新零售 数字化 移动互联 低成本 高收益'>
          <div className='intro_content join_content'>
            {joins.map((j, index) => (
              <Link to={j.url} key={index}>
                <div className='join_box'>
                  <p>{j.p1}</p>
                  <p>{j.p2}</p>
                  <p>{j.p3}</p>
                  <div className='line'></div>
                  <p style={{fontSize: '14px', padding: '30px 0'}}>MORE + </p>
                  <div className='join_img'>
                    <img src={j.pitcture} alt='' />
                  </div>
                </div>                
              </Link>
            ))}
          </div>
        </Section>

        <Section title='新闻资讯' comment='News & Events' abstract='了解御品茶缘最新加盟动态'>
          <div className='intro_content news_content'>
            <div className='news_area' style={{float:'left'}}>
              <h2><img src={new_title} alt='' />御品茶缘新闻<Link to='/'><span>MORE+</span></Link></h2>
              <div className='line'></div>
              <div className='news_img'><img src={news_img} alt='御品茶缘新闻' width='420' height='200'/></div>
              <ul className='news_list'>
                {news.map((n, index) => (
                  <Link to='/' key={index}>
                    <li>
                      <span className='left'><i></i>{n.title}</span>
                      <span className='right'>{n.time}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className='news_area'  style={{float:'right'}}>
              <h2><img src={new_title} alt='' />行业动态<Link to='/'><span>MORE+</span></Link></h2>
              <div className='line'></div>
              <div className='news_img'><img src={trends_img} alt='行业动态' width='420' height='200'/></div>
              <ul className='news_list'>
                {trends.map((t, index) => (
                  <Link to='/' key={index}>
                    <li>
                      <span className='left'><i></i>{t.title}</span>
                      <span className='right'>{t.time}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </Section>

      </div>
    )
  }
}

export default Home