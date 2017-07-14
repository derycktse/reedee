import React, { Component } from 'react'
import styles from './Subscription-folder.css'

const Subscription = ({ icon, title }) => {
  return (
    <li>
      <i></i>
      <span>*{title}*</span>
    </li>
  )
}

class SubscriptionFolder extends React.Component {
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
    const props = this.props
    const folders = [123, 123, 123]
    const state = this.state
    // const subscriptions = []
    return (
      <div id="subscription-folder" className={styles.subscriptionFolderContainter}>
        {
          folders.map((folder, idx) => {
            const subcrpts = state.subscriptions || [123, 123, 123]
            return (
              <div className={styles.subscriptionFolder} key={idx}>
                <ul>
                  {
                    subcrpts.map((subscrpt, subIndex) => {

                      let title = subscrpt.title
                        , icon = subscrpt.iconUrl
                      let obj = {
                        title, icon
                      }
                      return <Subscription key={subIndex} {...obj} />
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default SubscriptionFolder
