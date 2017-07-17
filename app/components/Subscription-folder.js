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
  let mapper = {}
  tags.forEach(val => {
    console.log(val)
    let key = val.id.replace(/\\\//g, '/')
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

//_.uniqBy(array, [iteratee=_.identity])
const extractFolder = (subscriptions = []) => {
  const categoriesArr = _.map(subscriptions, ({ categories }) => {
    return categories
  }) || []

  let folder = _.uniqWith(categoriesArr, _.isEqual) || []
  folder = folder.map(category => {
    category["subscriptions"] = _.filter(subscriptions, (sub) => {
      return sub.categories[0].id === category[0].id
    }
    )
    return category
  }
  )
  return folder
}


class SubscriptionFolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // fetch('http://localhost:3000/subscription/list').then(res => {
    //   return res.json()
    // }).then(data => {
    //   let subscriptions = data.subscriptions

    //   console.log(subscriptions)
    //   this.setState({
    //     subscriptions
    //   })
    // })
  }
  render() {
    const props = this.props
    let folders = [123, 123, 123]
    // const state = this.state
    // const subscriptions = []
    const { subscriptions, tags } = this.props
    let subscriptionFolder = extractFolder(subscriptions)
    console.log('subscript -foler')
    console.log(subscriptions)
    console.log('tag')
    console.log(tags)

    let subscriptionFolderMap = mapSubscriptions(subscriptions, tags)
    console.log(subscriptionFolderMap)
    folders = Object.keys(subscriptionFolderMap)
    return (
      <div id="subscription-folder" className={styles.subscriptionFolderContainter}>
        {
          folders.map((folderName, idx) => {

            return (
              <div className={styles.subscriptionFolder} key={idx}>
                <ul>
                  {
                    subscriptionFolderMap[folderName].subscriptions.map((subscrpt, subIndex) => {

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
