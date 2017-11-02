import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'
import asyncComponent from 'UTIL/asyncComponent'

const Main = asyncComponent(() =>
  import('VIEW/Main/').then(module => module.default)
)
const Login = asyncComponent(() =>
  import('VIEW/Login/').then(module => module.default)
)

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/adminLogin" component={Login} />
          <Route path="/" component={Main} />
          <Redirect to="/" />            
        </Switch>
      </Router>
    );
  }
}

export default App
