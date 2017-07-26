import React from 'react'
import styles from './feed-view.css'

const Feed = ({
  id,
  title,
  contentPreview,
  viewFeedContent
}) => {
  return (
    <li className={styles.feed}>
      <a onClick={() => {
        viewFeedContent(id)
      }}>
        <div></div>
        <p >{title}</p>
        <p>{contentPreview}</p>
      </a>
    </li>
  )
}

const FeedsView = ({
  visibleFeeds,
  viewFeedContent
}) => {
  console.log(`visibleFees length : ${visibleFeeds.length}`)
  return (
    <div className={styles['feeds-view']}>
      <ul>
        {
          visibleFeeds.map((feed) => {
            return <Feed {...feed} key={feed.id} viewFeedContent={viewFeedContent} />
          })
        }
      </ul>
    </div>
  )
}
export default FeedsView
