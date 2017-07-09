import React, { Component } from 'react'
import SubscriptionFolder from '../components/Subscription-folder'
import SubscriptionMenu from '../components/Subscription-menu'
import styles from './Reedee.css'
export default class Reedee extends Component {
  render() {
    return (
      <div id="reedee">
        <SubscriptionFolder className={styles.subscriptionFolder} />
        <SubscriptionMenu className={styles.subscriptionMenu} />
      </div>
    )
  }
}
