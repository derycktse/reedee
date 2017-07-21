import React, { Component } from 'react'
import SubscriptionFolder from '../components/Subscription-folder'
import SubscriptionMenu from '../components/Subscription-menu'
import SubscriptPane from './subscription-pane/'
import styles from './Reedee.css'


export default class Reedee extends Component {
  render() {
    return (
      <div id="reedee">
        <SubscriptPane name="deryck" />
        <SubscriptionMenu className={styles.subscriptionMenu} />
      </div>
    )
  }
}
