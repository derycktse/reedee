import React, { Component } from 'react'
import styles from './Subscription-menu.css';
import { Link } from 'react-router-dom';

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
      <Link to="/">to Home</Link>
      <div>filter panel</div>
    </div>
  )
}

export default class SubscriptionMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    fetch('http://localhost:3000/subscription/list').then(res => {
      return res.json()
    }).then(data => {
      let subscriptions = data.subscriptions

      console.log(subscriptions)
      this.setState({
        subscriptions
      })
    })
  }
  render() {
    let state = this.state
    let subscriptionList = state.subscriptions || []
    return (
      <div id="subscription-menu">
        <ul className="subscpt-set">
          {
            subscriptionList.map((sub, idx) => {

              let title = sub.title
              let obj = {
                title
              }
              return (
                <SubscriptionItem key={idx} {...obj} />
              )
            })
          }
        </ul>
        <FilterBox />
      </div>
    );
  }
}
