import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'reactstrap'

const loaderBgStyles = {
  width: '100vw',
  height: '100vh',
  background: 'rgba(102,16,242, .9)',
  zIndex: '1000',
  position: 'fixed',
  left: 0,
  top: 0
}

const loaderBarStyles = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  marginRight: '-50%',
  width: '70%',
  height: 40,
  transform: 'translate(-50%)'
}

const Loader = ({ isLoading }) => {
  
  return isLoading && <div style={ loaderBgStyles }>
      <Progress style={ loaderBarStyles } animated value="100" color="warning" />
    </div>
}

Loader.propTypes = {
  isLoading: PropTypes.bool
}

export default Loader