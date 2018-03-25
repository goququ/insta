import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap'

const cardStyles = {
  marginBottom: 25,
}

const ContentCard = ({ images, user, tags, caption, location }) => {
  
  return(
    <Col sm="6" xs="12" style={ cardStyles }>
      <Card>
        <CardImg top width="100%" src={ images.standard_resolution.url } alt="Picture" />
        <CardBody>
          <CardTitle>{ location.name }</CardTitle>
          <CardSubtitle>{ tags.join(', ') }</CardSubtitle>
          <CardText>{ caption.text }</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ContentCard