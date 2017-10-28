import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from 'VIEW/Home/'
import Setting from 'VIEW/Setting/'
import NotFound from 'VIEW/NotFound/'

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${this.props.match.url}`} component={Home}/>
        <Route path='/setting' component={Setting}/>
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Main