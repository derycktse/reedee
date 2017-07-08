import React, { Component } from 'react'

const Subscription = ({ }) => {
  return (
    <li>
      <i></i>
      <span>sub name</span>
    </li>
  )
}

class SubscriptionFolder extends React.Component {
  render() {
    const props = this.props
    const folders = [123, 123, 123]
    return (
      <div id="subscription-folder">
        {
          folders.map((folder, idx) => {
            const subcrpts = [123, 123, 123]
            return (
              <div>
                <ul>
                  {
                    subcrpts.map((subscrpt, subIndex) => {
                      return <Subscription />
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
