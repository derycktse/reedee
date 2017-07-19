import React, { Component } from 'react'
import SubscriptionFolder from '../components/Subscription-folder'
import SubscriptionMenu from '../components/Subscription-menu'
import styles from './Reedee.css'


export default class Reedee extends Component {
  render() {
    const { syncTagList, syncSubscriptionList } = this.props
    return (
      <div id="reedee">
        <button onClick={()=>{
          syncTagList()
          syncSubscriptionList()
          }}>sync data</button>
        <SubscriptionFolder classNam e={styles.subscriptionFolder} {...this.props} />
        <SubscriptionMenu className={styles.subscriptionMenu} />
      </div>
    )
  }
}
