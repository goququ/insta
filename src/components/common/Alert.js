import React from 'react'
import PropTypes from 'prop-types'
import { UncontrolledAlert } from 'reactstrap'

const alertStyles = {
  position: 'fixed',
  top: 100,
  left: '50%',
  transform: 'translateX(-50%)'
}

const Alert = ({ isSown=true, text='Simple string', type='danger' }) => {
  return  <UncontrolledAlert color={ type } style={ alertStyles }>
    { text }
  </UncontrolledAlert>
}

Alert.propTypes = {
  isSown: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string
}

export default Alert