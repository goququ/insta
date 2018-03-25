import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Form, Label, FormGroup, FormFeedback } from 'reactstrap';
import { required, number } from '../share/validations'

const renderInput = ({input, meta:{touched , error}, ...rest}) => (
  <div>
    <Label for="tag">Type the Instagram user ID ( 1782869500 )</Label>
    <Input { ...input } { ...rest } 
      invalid={ error && touched ? true : false }
      valid={ !error && touched ? true : false }
    />
    <FormFeedback>{ error }</FormFeedback>
  </div>
)

const UserForm = props => {
  const { handleSubmit } = props
  
  return (
    <Form onSubmit={ handleSubmit }>
      <FormGroup>
        <Field component={ renderInput } validate={[required, number]} type="text" name='userID' placeholder="ID"/>
        <Button color="success" type="submit" size="lg" block style={{marginTop: 20}}>Go!</Button>
      </FormGroup>
    </Form>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'userForm'
})(UserForm)

