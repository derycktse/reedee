import React, { Component } from 'react'
import styles from './Subscription-folder.css'
const Subscription = ({ }) => {
  return (
    <li>
      <i></i>
      <span>sub name</span>
    </li>
  )
}

class SubscriptionFolder extends React.Component {
  render() {
    const props = this.props
    const folders = [123, 123, 123]
    return (
      <div id="subscription-folder" className={styles.subscriptionFolderContainter}>
        {
          folders.map((folder, idx) => {
            const subcrpts = [123, 123, 123]
            return (
              <div className={styles.subscriptionFolder} key={idx}>
                <ul>
                  {
                    subcrpts.map((subscrpt, subIndex) => {
                      return <Subscription key={subIndex} />
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
