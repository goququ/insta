import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const cardStyles = {
  marginBottom: 25,
  width: 'calc(50% - 20px)',
  marginRight: 20,
  display: 'inline-block'
}

const ContentCard = ({ images, user, tags, caption, location }) => {
  
  return(
    <Card style={ cardStyles }>
      <CardImg top width="100%" src={ images.standard_resolution.url } alt="Picture" />
      <CardBody>
        <CardTitle>{ location.name }</CardTitle>
        <CardSubtitle>{ tags.join(', ') }</CardSubtitle>
        <CardText>{ caption.text }</CardText>
      </CardBody>
    </Card>
  )
}

export default ContentCard