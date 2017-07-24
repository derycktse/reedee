import React, { Component } from 'react'
import SubscriptionMenu from '../components/Subscription-menu'
import SubscriptPane from './subscription-pane/'
import styles from './Reedee.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Reedee extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="reedee">
          <SubscriptPane name="deryck" />
          <SubscriptionMenu className={styles.subscriptionMenu} />
        </div>
      </MuiThemeProvider>
    )
  }
}
