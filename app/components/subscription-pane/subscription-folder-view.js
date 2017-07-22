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
  subscriptions,
  onFolderToggle,
  id,
  isClosed
}) => {
  let folder = ''
  return (
    <div ref={node => { folder = node }}>
      <div><a onClick={() => {
        onFolderToggle(id)
      }}>toggle me</a>{folderName} {isClosed ? 'no' : 'yes'}</div>
      <ul>
        {
          subscriptions.map(subscription => {
            return <Subscription {...subscription} key={subscription.id} />
          })
        }
      </ul>
    </div>
  )
}

class SubscriptionFolderView extends Component {
  render() {
    const { subscriptionFolder, onSync, onFolderToggle } = this.props
    console.log(subscriptionFolder)
    return (
      <div>
        <div><button onClick={onSync}>sync from server</button></div>
        {subscriptionFolder.map(folder => {
          if (folder.subscriptions.length === 0) return null

          return <Folder {...folder} onFolderToggle={onFolderToggle} key={folder.id} />
        })}
      </div>
    )
  }
}

export default SubscriptionFolderView
