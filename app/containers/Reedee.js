import React, { Component } from 'react'
import SubscriptionFolder from '../components/Subscription-folder'
import SubscriptionMenu from '../components/Subscription-menu'

export default class Reedee extends Component {
  render() {
    return (
      <div>
        <SubscriptionFolder />
        <SubscriptionMenu />
      </div>
    )
  }
}
