import React from 'react'
import { Carousel } from 'antd'

import './index.less'
import one from './img/1.png'
import two from './img/2.png'
import three from './img/3.jpg'

class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Carousel autoplay>
          <div className='slide_img'><img src={one}  alt='1'/></div>
          <div className='slide_img'><img src={two}  alt='2'/></div>
          <div className='slide_img'><img src={three}  alt='3'/></div>
        </Carousel>
      </div>
    )
  }
}

export default Home