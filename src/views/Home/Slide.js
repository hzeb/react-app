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
      animate: {
        marginLeft: 0
      },
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
    let list = this.state.list.slice(),
    t = this.state.timeout,
    transition_duration = 500,
    animate_duration = 2000;

    const autoPlay = () => {
      clearTimeout(this.state.timeout);
      this.setState({animate: {
        transition: `margin ${transition_duration}ms`,
        marginLeft: '-165px'
      }});
      setTimeout(() => {
        this.setState({animate: {
          marginLeft: 0
        }});
        list.push(list.splice(0,1)[0]);
        this.setState({list: list});
      }, transition_duration); 

      t = setTimeout(autoPlay, animate_duration);
      this.setState({timeout: t}); 
    };
    autoPlay();
  }
  render() {
    const {list} = this.state;
    return (
      <div className='slide_box'>
        <ul style={this.state.animate} onMouseEnter={this.stopSlide.bind(this)} onMouseLeave={this.startSlide.bind(this)}>
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