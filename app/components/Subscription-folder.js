import React, { Component } from 'react'
import styles from './Subscription-folder.css'
import _ from 'lodash'

const Subscription = ({ icon, title, unreadCount }) => {
  return (
    <li>
      <div>
        <img src={icon} alt={title} />
        <span>{title}</span>
      </div>
      <div>
        <span>{unreadCount}</span>
      </div>
    </li>
  )
}


const mapSubscriptions = ({ subscriptions = [], tags = [], unreadCounts }) => {
  const unreadCountsMapper = {}
  unreadCounts.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, unreadCountsMapper)

  const mapper = {}
  tags.forEach(val => {
    console.log(val)
    const key = val.id.replace(/\\\//g, '/')
    mapper[key] = val
    mapper[key]["subscriptions"] = []
  })

  subscriptions.forEach(subscription => {
    if (unreadCountsMapper[subscription.id]) {
      subscription.unreadCount = unreadCountsMapper[subscription.id].count
    }
    let categories = subscription.categories
    categories.forEach(cate => {
      mapper[cate.id].subscriptions.push(subscription)
    })
  })

  return mapper
}

class SubscriptionFolder extends React.Component {
  static propTypes = {
    subscriptions: React.PropTypes.array,
    tags: React.PropTypes.array,
    unreadCounts: React.PropTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    const { subscriptions, tags, unreadCounts } = this.props
    const subscriptionFolderMap = mapSubscriptions({ subscriptions, tags, unreadCounts })
    console.log(subscriptionFolderMap)
    const folders = Object.keys(subscriptionFolderMap)
    return (
      <div id="subscription-folder" className={styles.subscriptionFolderContainter}>
        {
          folders.map((folderName) => {
            const folder = subscriptionFolderMap[folderName]

            if (folder.subscriptions.length === 0) return null
            return (
              <div className={styles.subscriptionFolder} key={folder.id}>
                <div>{folderName.replace(/.*\//, '')}</div>
                <ul>
                  {
                    folder.subscriptions.map((subscrpt) => {
                      const { id, title, iconUrl, unreadCount } = subscrpt
                      const obj = {
                        title,
                        icon: iconUrl,
                        unreadCount
                      }
                      return <Subscription key={id} {...obj} />
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
