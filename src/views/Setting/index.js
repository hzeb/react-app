import React from 'react'
import Ueditor from 'COMPONENT/Ueditor/'

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.receiveHtml = this.receiveHtml.bind(this);
  }
  receiveHtml(content) {
    console.log("recieved HTML content", content);
    this.setState({responseList:[]});
  }
  render() {
    return (
      <div>
        <Ueditor id="Ueditor" css={{width:'1200px', height: '600px'}}/>
      </div>
    )
  }
}

export default Setting