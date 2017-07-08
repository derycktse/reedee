import React, { Component } from 'react'
import styles from './Subscription-menu.css';

const SubscriptionItem = ({
  subscriptionName = 'subscriptionName',
  scrabTime = '2017-01-01',
  title = 'subscript title',
  contentPreview = 'content preview'
}) => {
  return (
    <li>
      <p><span>{subscriptionName}</span><span>{scrabTime}</span></p>
      <p>{title}</p>
      <p>{contentPreview}</p>
    </li>
  )
}

const FilterBox = () => {
  return (
    <div>
      <div>filter panel</div>
    </div>
  )
}

export default class SubscriptionMenu extends Component {
  render() {
    let props = this.props
    let subscriptionList = [1, 2, 3, 5]
    return (
      <div id="subscription-menu">
        <ul className="subscpt-set">
          {
            subscriptionList.map((sub, idx) => {
              return (
                <SubscriptionItem key={idx} />
              )
            })
          }
        </ul>
        <FilterBox />
      </div>
    );
  }
}
