import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import Home from 'VIEW/Home/'
import Setting from 'VIEW/Setting/'
import './index.css'
import menus from './menus'

class Main extends React.Component {
  render() {
    return (
      <div>
        <header>
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
        <Switch>
          <Route exact path={`${this.props.match.url}`} component={Home}/>
          <Route exact path='/setting' component={Setting}/>
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default Main