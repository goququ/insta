import { connect } from 'react-redux'
import { loadUser, loadTag } from '../ducks/search'
import MainForm from '../components/forms/MainForm'

const mapDispatchToProps = (dispatch) => {
  return{
    loadUser: (id) => {
      dispatch(loadUser(id))
    },
    loadTag: (str) => {
      dispatch(loadTag(str))
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(MainForm)
