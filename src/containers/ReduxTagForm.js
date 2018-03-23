import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Input, Form, Label, FormGroup } from 'reactstrap';
import { required, number } from '../share/validations'

const TagForm = props => {
  
  const { handleSubmit } = props
  return (
    <Form onSubmit={ handleSubmit }>
      <FormGroup>
        <Label for="tag">Type the tag</Label>
        <Field component={Input} validate={[required, number]} type="text" name="tag" id="tag" placeholder="Media in Instagram by tag" />
        <Button color="success" type="submit" size="lg" block style={{marginTop: 20}}>Go!</Button>
      </FormGroup>
    </Form>
  )
}

const ReduxTagForm = reduxForm({
  form: 'tagForm'
})(TagForm)

export default ReduxTagForm