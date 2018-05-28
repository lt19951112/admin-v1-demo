import React from 'react'
import ReactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css'
import Home from 'page/home/index.jsx'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router'
import './test.scss'

class App extends React.Component{
  render () {
    return (
        <Router>
            <Switch>
              <Route exact path="/" Component="{Home}"/>
              <Redirect from="*" to="/"/>
            </Switch>
        </Router>
    );
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)