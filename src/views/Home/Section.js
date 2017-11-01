import React from 'react'

import './Section.less'

class Section extends React.Component {
  render() {

    return (
      <div className='Section'>
        <div className='intro'>
          <h2>{this.props.title}</h2>
          <h3>{this.props.comment}</h3>
          <h4>{this.props.abstract}</h4>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Section