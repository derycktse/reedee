import React, { Component } from 'react'
import SubscriptionFolder from '../components/Subscription-folder'
import SubscriptionMenu from '../components/Subscription-menu'
import styles from './Reedee.css'


export default class Reedee extends Component {
  storeData(itemName, data) {
    try {
      window.localStorage.setItem(itemName, JSON.stringify(data))
      console.log(`write ${itemName} data done`)
      return true
    } catch (e) {
      throw e
    }
  }
  fetchData(name) {
    return fetch(`http://localhost:3000/${name}`).then(res => res.json())
  }
  syncDataFromServer() {
    const { fetchData, readLocalData } = this.props

    const fetchTagList = this.fetchData('tag-list').then(data => {
      this.storeData('tag-list', data)
      return Promise.resolve()
    })
    const fetchSubscriptions = this.fetchData('subscription-list').then(data => {
      this.storeData('subscriptions', data)
      return Promise.resolve()
    })

    Promise.all([fetchTagList, fetchSubscriptions]).then(() => {
      readLocalData(["subscriptions", 'tag-list'])
    })
  }
  render() {
    return (
      <div id="reedee">
        <button onClick={this.syncDataFromServer.bind(this)}>sync data</button>
        <SubscriptionFolder classNam e={styles.subscriptionFolder} {...this.props} />
        <SubscriptionMenu className={styles.subscriptionMenu} />
      </div>
    )
  }
}
