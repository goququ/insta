import React, { Component } from 'react'
import HomeTopBlock from '../common/HomeTopBlock'
import ConnectedMainForm from '../../containers/ConnectedMainForm'
import PageContainer from '../common/PageContainer'
import ConnectedLoader from '../../containers/ConnectedLoader'
import ContentList from '../../containers/ConnectedContentList'
// import { AUTH_URL } from '../../config'
// import Alert from '../common/Alert'

export default class Home extends Component{
  
  render(){
    return(
      <PageContainer>
        <HomeTopBlock>
          <ConnectedMainForm />
        </HomeTopBlock>
        <ConnectedLoader />
        <ContentList />
      </PageContainer>
    );
  }
}