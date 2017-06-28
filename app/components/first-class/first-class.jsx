import React from 'react'



/**
 * 订阅的分组
 */
class Group extends React.Component {
  render() {
    let gourpInfo = this.props.gourpInfo || {}
    return (
      <div>
        <div>gourp name {gourpInfo.subsCount || 0}</div>
        <ul>
          {(gourpInfo.subscriptions || []).map((subscription, index) => {
            return (<li>
              <img /> <span></span><span></span>
            </li>)
          })}
        </ul>
      </div>
    )
  }
}

class FirstClass extends React.Component {
  render() {
    return (
      <div id="first-class">
        <Group />
      </div>
    )
  }
}

export default FirstClass