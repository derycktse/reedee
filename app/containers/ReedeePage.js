import { connect } from 'react-redux'
import Reedee from '../components/reedee'

function mapStateToProps(state) {
  return {
    reedee: state.reedee,
    subscriptions: state.reedee && state.reedee.subscriptions,
    tags: state.reedee && state.reedee.tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    syncData() {
      fetch('http://localhost:3000/tag-list').then(res => res.json()).then(data => {
        dispatch(
          {
            type: 'SYNC',
            data
          }
        )
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reedee)
