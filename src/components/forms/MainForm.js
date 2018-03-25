import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button, Collapse } from 'reactstrap'
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
    
    const { openForm } = this.state
    const { loadUser, loadTag } = this.props
    
    return(
      <div>
        <ButtonGroup style={{marginBottom: 30}}>
          <Button color="info" onClick={this.showUserForm} outline={openForm === 'user'}>User</Button>
          <Button color="info" onClick={this.showTegForm} outline={openForm === 'tag'}>Tag</Button>
        </ButtonGroup>
        
        <Collapse isOpen={openForm === 'user'}>
          <ReduxUserForm onSubmit={ values => loadUser(values.userID) }/>
        </Collapse>
        <Collapse isOpen={openForm === 'tag'}>
          <ReduxTagForm onSubmit={ values => loadTag(values.tag) }/>
        </Collapse>
      </div>
    )
  }
}

MainForm.propTypes = {
  loadUser: PropTypes.func,
  loadTag: PropTypes.func
}
