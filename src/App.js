import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'
import Main from 'VIEW/Main/'
import Login from 'VIEW/Login/'

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
