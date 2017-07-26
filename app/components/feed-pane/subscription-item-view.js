import React from 'react'
import styles from './feed-view.css'

const Feed = ({
  title,
  contentPreview
}) => {
  return (
    <li className={styles.feed}>
      <div></div>
      <p >{title}</p>
      <p>{contentPreview}</p>
    </li>
  )
}

const FeedsView = ({
  visibleFeeds
}) => {
  console.log(`visibleFees length : ${visibleFeeds.length}`)
  return (
    <div className={styles['feeds-view']}>
      <ul>
        {
          visibleFeeds.map((feed) => {
            return <Feed {...feed} key={feed.id} />
          })
        }
      </ul>
    </div>
  )
}
export default FeedsView
