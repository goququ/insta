import React, { Component } from 'react'
import { Row, Container } from 'reactstrap';
import Card from './Card'

export default class ContentList extends Component {
  constructor(props){
    super(props)
    
    this.renderCardList = this.renderCardList.bind(this)
  }
  
  renderCardList(){
    const { data } = this.props
    console.log(data)
    return (
      <Container>
        <Row style={{ marginRight: -20}}>
          { data.map( item => (<Card { ...item }/>)) }
        </Row>
      </Container>
    )
  }
  
  render(){
    const { data } = this.props
    return data && data.length > 0 && this.renderCardList()
  }
}