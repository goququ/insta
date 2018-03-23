import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';

const styles = {
  marginTop: 40
}

export default class HomeTopBlock extends Component {
  render(){
    return(
      <div style={ styles }>
        <Jumbotron>
          <h1 className="display-3">Hello, this is Instagram widget!</h1>
          <hr className="my-2" />
          <p>To view the content will need a little information. Fill one of form please :D</p>
          
          { this.props.children }
          
        </Jumbotron>
      </div>
    )
  }
}