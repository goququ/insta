import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './routes/Home' 

export default class Root extends Component{
  
  render(){
    return(
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    );
  }
}