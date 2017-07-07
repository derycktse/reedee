import React, { Component } from 'react'

const Subscription = () => {
  return (
    <li>
      <p><span>date</span></p>
      <p>title</p>
      <p>content preview</p>
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
    return (
      <div>
        <Subscription />
        <FilterBox />
      </div>
    );
  }
}
