import React from 'react'
import styles from './feed-content-view.css'
function createMarkup(content) {
  return { __html: content };
}
const FeedContentView = ({ content }) => {
  return (
    <div className={styles['feeds-content']}>
      <div dangerouslySetInnerHTML={createMarkup(content)}>
      </div>
    </div>
  )
}

export default FeedContentView
