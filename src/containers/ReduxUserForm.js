import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Form, Label, FormGroup, FormFeedback } from 'reactstrap';

const UserForm = props => {
  const { handleSubmit } = props
  
  const renderField = (field) => (
    
    <div className="input-row">
      <Label for="userID">Type the user Instagram ID</Label>
      <Input type="text" {...field.input} />
      {field.meta.touched && field.meta.error &&
         <FormFeedback>{field.meta.error}</FormFeedback>}
    </div>
  )
  
  
  return (
    <Form onSubmit={ handleSubmit }>
      <FormGroup>
        <Field component={ renderField } className="form-control" name="userID" placeholder="Instagram ID"/>
        
        <Button color="success" type="submit" size="lg" block style={{marginTop: 20}}>Go!</Button>
      </FormGroup>
    </Form>
  )
}

const ReduxUserForm = reduxForm({
  form: 'userForm'
})(UserForm)

export default ReduxUserForm

