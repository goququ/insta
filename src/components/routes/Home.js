import React, { Component } from 'react'
import HomeTopBlock from '../common/HomeTopBlock'
import ConnectedMainForm from '../../containers/ConnectedMainForm'

export default class Home extends Component{
  
  render(){
    return(
      <div>
        <HomeTopBlock>
          <ConnectedMainForm />
        </HomeTopBlock>
      </div>
    );
  }
}