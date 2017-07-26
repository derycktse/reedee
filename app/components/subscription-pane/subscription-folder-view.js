import React, { Component } from 'react'
import styles from './subscription-folder-view.css'
import { Link } from 'react-router-dom';

const Subscription = ({ iconUrl, title, unreadCount }) => {
  return (
    <li>
      <div className={styles['subscription-item']}>
        <div>
          <img src={iconUrl} alt={title} />
          <span>{title}</span>
        </div>
        <div>
          <span>{unreadCount}</span>
        </div>
      </div>

    </li>
  )
}
Subscription.propTypes = {
  iconUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  unreadCount: React.PropTypes.number.isRequired
}

const Folder = ({
  folderName,
  subscriptions = [],
  onFolderToggle = () => { },
  id,
  isClosed
}) => {
  return (
    <div className={styles['subscription-folder']}>
      <div >
        <a onClick={(e) => {
          onFolderToggle(id)
          e.preventDefault()
        }}><span><i className="material-icons">{isClosed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}</i>{folderName} </span></a>
      </div>
      <ul className={isClosed ? styles['closed'] : ''}>
        {
          subscriptions.map(subscription => {
            return <Subscription {...subscription} key={subscription.id} />
          })
        }
      </ul>
    </div >
  )
}
Folder.propTypes = {
  folderName: React.PropTypes.string.isRequired,
  subscriptions: React.PropTypes.array,
  onFolderToggle: React.PropTypes.func,
  id: React.PropTypes.string.isRequired,
  isClosed: React.PropTypes.bool
}

const ToolBox = ({ onSync }) => {
  return (
    <div className={styles['tool-box']}>
      <a onClick={onSync}><i className="material-icons">refresh</i></a>
      <Link to="/"><i className="material-icons">home</i></Link>
      <a><i className="material-icons">add</i></a>
    </div>
  )
}

class SubscriptionFolderView extends Component {
  render() {
    const { subscriptionFolder, onSync, onFolderToggle } = this.props
    return (
      <div className={styles['subscription-folder-pane']}>
        {subscriptionFolder.map(folder => {
          if (folder.subscriptions.length === 0) return null

          return <Folder {...folder} onFolderToggle={onFolderToggle} key={folder.id} />
        })}
        <ToolBox onSync={onSync} />
      </div>
    )
  }
}

export default SubscriptionFolderView
