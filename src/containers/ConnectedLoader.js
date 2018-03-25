import { connect } from 'react-redux'
import Loader from '../components/common/Loader'

const mapStateToProps = (state) => {
  
  const loadingState = state.search.loading
  
  return {
    isLoading: loadingState
  }
}

export default connect(
  mapStateToProps,
  null
)(Loader)