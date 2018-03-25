import { connect } from 'react-redux'
import Alert from '../components/common/Alert'
import { resetError } from '../ducks/search'

const mapStateToPtops = (state) => {
  const { error } = state.search
  return {
    error: !!error ? error : '' 
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    resetError: () => {
      dispatch(resetError())
    }
  }
}

export default connect(
  mapStateToPtops,
  mapDispatchToProps
)(Alert)