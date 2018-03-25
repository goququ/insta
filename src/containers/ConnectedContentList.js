import { connect } from 'react-redux'
import ContentList from '../components/common/ContentList'

const mapStateToProps = (state) => {
  return {
    data: state.search.data
  }
}

export default connect(
  mapStateToProps,
  null
)(ContentList)
