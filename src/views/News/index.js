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

const NewsList = asyncComponent(() =>
  import('VIEW/News/NewsList').then(module => module.default)
)

class News extends React.Component {
  render() {
    return (
      <div className='News'>
        <div className='header_img'></div>
        <div className='content_area'>
          <div className='aside'>
            <SideBar sideMenus={sideMenus} location={this.props.location}></SideBar>
          </div>
          <div className='main_area'>
            <Breadcrumb location={this.props.location}/>
            <Switch>
              <Route exact path={`${this.props.match.url}/press`} component={NewsList}/>
              <Route exact path={`${this.props.match.url}/trend`} component={NewsList}/>
              <Route exact path={`${this.props.match.url}/culture`} component={NewsList}/>
              <Redirect to={`${this.props.match.url}`} />
            </Switch>
          </div>   
        </div>
      </div>
    )
  }
}

export default News