import React from 'react'
import PropTypes from 'prop-types'
import { Alert  } from 'reactstrap'

const alertStyles = {
  position: 'fixed',
  top: 100,
  left: '50%',
  transform: 'translateX(-50%)',
  cursor: 'pointer'
}

const MyAlert = ({ error, resetError }) => {
  return <Alert color='danger' style={ alertStyles } isOpen={!!error} onClick={ resetError }>
    { error || 'Неизвестная ошибка' }
  </Alert>
}

MyAlert.propTypes = {
  error: PropTypes.string,
  resetError: PropTypes.func
}

export default MyAlert