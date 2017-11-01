import React from 'react'
import {
  Link
} from 'react-router-dom'

import './Slide.less'

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      animate: false,
      list: props.list.slice()
    }
  }
  componentDidMount() {
    this.startSlide();    
  }
  stopSlide() {
    clearTimeout(this.state.timeout);
  }
  startSlide() {
    let list = this.state.list.slice();
    let t = this.state.timeout;
    const autoPlay = () => {
      clearTimeout(this.state.timeout);
      this.setState({animate: true});
      setTimeout(() => {
        this.setState({animate: false});
        list.push(list.splice(0,1)[0]);
        this.setState({list: list});
      }, 500);     
      t = setTimeout(autoPlay, 2000);
      this.setState({timeout: t}); 
    };
    autoPlay();
  }
  render() {
    const {list} = this.state;
    return (
      <div className='slide_box'>
        <ul className={this.state.animate?'animate':''} onMouseEnter={this.stopSlide.bind(this)} onMouseLeave={this.startSlide.bind(this)}>
          {list.map(m => (
            <li>
             <Link to={m.url}>
               <img src={m.pitcture} alt=''/>
             </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Slide;