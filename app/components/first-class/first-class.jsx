import React from 'react'

/**
 * 订阅的分组
 */
const Group = ({ data }) => {
  return (
    <div>
      <div></div>
      <ul>{
        data.subscriptions.map((sub, index) => {
          return <li key={index}>{sub.title}</li>
        })
      }
      </ul>
    </div>
  )
}

class FirstClass extends React.Component {
  componentDidMount() {
    fetch('http://www.inoreader.com/reader/api/0/user-info').then(res=> res.json())
  }
  render() {
    return (
      <div id="first-class">
        <Group data={{ subscriptions: [] }} />
      </div>
    )
  }
}

export default FirstClass