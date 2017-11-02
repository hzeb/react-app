import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import './index.less'
import menus from './menus'
import Contact from './Contact'

import asyncComponent from 'UTIL/asyncComponent'

const Home = asyncComponent(() =>
  import('VIEW/Home/').then(module => module.default)
)
const Setting = asyncComponent(() =>
  import('VIEW/Setting/').then(module => module.default)
)

class Main extends React.Component {
  render() {
    return (
      <div className='whole_main'>
        <header className='main_header'>
          <div className='companyAd'></div>
          <div className='contact'></div>
          <div className='navbar_container'>
            <ul className='navbar'>
              {menus.map(m => (
                <li className={this.props.location.pathname === m.url?'active':''}>
                 <Link to={m.url}>
                   {m.name}
                 </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <article className='main_article'>
          <Switch>
            <Route exact path={`${this.props.match.url}`} component={Home}/>
            <Route exact path='/setting' component={Setting}/>
            <Redirect to="/" />
          </Switch>
        </article>
        <footer className='main_footer'>
          <div className='navbar_container'>
            <ul className='navbar'>
              {menus.map(m => (
                <li className={this.props.location.pathname === m.url?'active':''}>
                 <Link to={m.url}>
                   {m.name}
                 </Link>
                </li>
              ))}
            </ul>
          </div>
          <Contact />
          <div class="bottom">
            <p>版权所有：广东御品茶缘茶叶有限公司   备案号：湘ICP备17003358号-1 技术支持：<a>广州仙女网络</a></p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Main