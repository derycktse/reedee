import React from 'react'
import styles from './feed-view.css'

const Feed = ({
  id,
  title,
  contentPreview,
  viewFeedContent,
  origin: { title: feedName },
  crawlTimeMsec,
  activeFeedId
}) => {
  let date = new Date(parseInt(crawlTimeMsec, 10)).toLocaleString()
  return (
    <li className={`${styles.feed} ${activeFeedId === id ? styles.active : ''}`}>
      <a onClick={() => {
        viewFeedContent(id)
      }}>
        <div className={styles['feed-header']}><span>{feedName}</span><span>{date}</span></div>
        <p >{title}</p>
        <p>{contentPreview}</p>
      </a>
    </li>
  )
}

const FeedsView = ({
  visibleFeeds,
  viewFeedContent,
  statusController
}) => {
  console.log(`visibleFees length : ${visibleFeeds.length}`)
  let activeFeedId = statusController['activeFeedId']
  return (
    <div className={styles['feeds-view']}>
      <ul>
        {
          visibleFeeds.map((feed) => {
            return <Feed {...feed} key={feed.id} viewFeedContent={viewFeedContent} activeFeedId={activeFeedId} />
          })
        }
      </ul>
    </div>
  )
}
export default FeedsView
