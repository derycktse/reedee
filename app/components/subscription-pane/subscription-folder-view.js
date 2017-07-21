import React, { Component } from 'react'


const Subscription = ({ iconUrl, title, unreadCount }) => {
  return (
    <li>
      <div>
        <img src={iconUrl} alt={title} />
        <span>{title}</span>
      </div>
      <div>
        <span>{unreadCount}</span>
      </div>
    </li>
  )
}


const Folder = ({
folderName,
  subscriptions
}) => {
  return (
    <div>
      <div>{folderName}</div>
      <ul>
        {
          subscriptions.map(subscription => {
            return <Subscription {...subscription} />
          })
        }
      </ul>
    </div>
  )
}

class SubscriptionFolderView extends Component {
  render() {
    const { subscriptionFolder } = this.props
    console.log(subscriptionFolder)
    return (
      <div>
        {subscriptionFolder.map(folder => {
          if (folder.subscriptions.length === 0) return null

          return <Folder {...folder} />
        })}
      </div>
    )
  }
}

export default SubscriptionFolderView
