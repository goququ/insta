import React, { Component } from 'react'
import { ButtonGroup, Button, Collapse } from 'reactstrap';
import ReduxUserForm from '../../containers/ReduxUserForm'
import ReduxTagForm from '../../containers/ReduxTagForm'


export default class MainForm extends Component {
  constructor(props){
    super(props)
    
    this.showUserForm = this.showUserForm.bind(this)
    this.showTegForm = this.showTegForm.bind(this)
    this.state = {
      openForm: 'user',
    }
  }
  
  showUserForm(){
    this.setState({
      openForm: 'user'
    })
  }
  showTegForm(){
    this.setState({
      openForm: 'tag'
    })
  }
  
  render(){
    return(
      <div>
        <ButtonGroup style={{marginBottom: 30}}>
          <Button color="info" onClick={this.showUserForm}>User</Button>
          <Button color="info" onClick={this.showTegForm}>Teg</Button>
        </ButtonGroup>
        
        <Collapse isOpen={this.state.openForm === 'user'}>
          <ReduxUserForm handleSubmit={ this.props.loadUser }/>
        </Collapse>
        <Collapse isOpen={this.state.openForm === 'tag'}>
          <ReduxTagForm handleSubmit={ this.props.loadTag }/>
        </Collapse>
      </div>
    )
  }
}