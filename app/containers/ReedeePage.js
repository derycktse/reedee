import { connect } from 'react-redux'
import Reedee from '../components/reedee'

function mapStateToProps(state) {
  return {
    reedee: state.reedee
  }
}

export default connect(mapStateToProps)(Reedee)
