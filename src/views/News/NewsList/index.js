import React from 'react'

import './index.less'


class NewsList extends React.Component {
  render() {
    const url = this.props.location.pathname.split('/')[2];
    return (
      <div className='NewsList'>
        {url}
      </div>
    )
  }
}

export default NewsList