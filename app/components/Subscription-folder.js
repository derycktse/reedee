import React, { Component } from 'react'
import styles from './Subscription-folder.css'
import _ from 'lodash'

const Subscription = ({ icon, title }) => {
  return (
    <li>
      <i></i>
      <img src={icon} />
      <span>{title}</span>
    </li>
  )
}


const mapSubscriptions = (subscriptions = [], tags = []) => {
  const mapper = {}
  tags.forEach(val => {
    console.log(val)
    const key = val.id.replace(/\\\//g, '/')
    mapper[key] = val
    mapper[key]["subscriptions"] = []
  })

  subscriptions.forEach(subscription => {
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
    tags: React.PropTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
  }
  render() {
    const { subscriptions, tags } = this.props
    const subscriptionFolderMap = mapSubscriptions(subscriptions, tags)
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
                      let title = subscrpt.title
                        , icon = subscrpt.iconUrl

                      const id = subscrpt.id
                      const obj = {
                        title, icon
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
