import React, { Component } from 'react'
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
      <div style={{ marginRight: -20}}>
        { data.map( item => (<Card { ...item }/>)) }
      </div>
    )
  }
  
  render(){
    const { data } = this.props
    return data && data.length > 0 && this.renderCardList()
  }
}