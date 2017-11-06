import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './index.less'
import Breadcrumb from 'COMPONENT/Breadcrumb'
import SideBar from 'COMPONENT/SideBar'

import sideMenus from './sideMenus'

import asyncComponent from 'UTIL/asyncComponent'

const Sketch = asyncComponent(() =>
  import('VIEW/Company/Sketch').then(module => module.default)
)

class Company extends React.Component {
  render() {
    return (
      <div className='Company'>
        <div className='header_img'></div>
        <div className='content_area'>
          <div className='aside'>
            <SideBar sideMenus={sideMenus} location={this.props.location}></SideBar>
          </div>
          <div className='main_area'>
            <Breadcrumb location={this.props.location}/>
            <Switch>
              <Route exact path={`${this.props.match.url}/sketch`} component={Sketch}/>
              <Route exact path={`${this.props.match.url}/events`} component={Sketch}/>
              <Route exact path={`${this.props.match.url}/honor`} component={Sketch}/>
              <Route exact path={`${this.props.match.url}/culture`} component={Sketch}/>
              <Redirect to={`${this.props.match.url}`} />
            </Switch>
          </div>   
        </div>
      </div>
    )
  }
}

export default Company