import React from 'react'

const Feed = ({
  title,
  contentPreview
}) => {
  return (
    <li>
      <div></div>
      <p>{title}</p>
      <p>{contentPreview}</p>
    </li>
  )
}

const FeedsView = ({
  visibleFeeds
}) => {
  return (
    <div>
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
