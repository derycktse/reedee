import React, { Component } from 'react'
import SubscriptionMenu from '../components/Subscription-menu'
import SubscriptPane from './subscription-pane/'
import styles from './Reedee.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplitPane from 'react-split-pane'


export default class Reedee extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="reedee">
          <SplitPane split="vertical" minSize={50} defaultSize='250'>
            <SubscriptPane name="deryck" />
            <SubscriptionMenu className={styles.subscriptionMenu} />
          </SplitPane>
        </div>
      </MuiThemeProvider>
    )
  }
}
