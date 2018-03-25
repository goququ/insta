import React from 'react'

const PageContainer = ({children}) => {
  
  const containerStyles = {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 20px'
  }
  
  return(
    <div style={ containerStyles }>
      { children }
    </div>
  )
}

export default PageContainer