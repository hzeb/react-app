import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from 'VIEW/Home/'
import Setting from 'VIEW/Setting/'

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.url}`} component={Home}/>
        <Route exact path='/setting' component={Setting}/>
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Main