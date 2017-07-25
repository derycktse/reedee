import React, { Component } from 'react'
import SubscriptionMenu from '../components/Subscription-menu'
import SubscriptPane from './subscription-pane/'
import FeedPane from './feed-pane/'
import styles from './Reedee.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SplitPane from 'react-split-pane'


export default class Reedee extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="reedee">
          <SplitPane split="vertical" minSize={250}>
            <SubscriptPane name="deryck" />
            <SplitPane split="vertical" minSize={250}>
              <FeedPane />
              <SubscriptionMenu className={styles.subscriptionMenu} />
            </SplitPane>

          </SplitPane>
        </div>
      </MuiThemeProvider>
    )
  }
}
