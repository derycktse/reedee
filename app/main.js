
import ReactDOM from 'react-dom'
import React from 'react'
import List from './components/list.jsx'
import FirstClass from './components/first-class/first-class.jsx'

class Reedee extends React.Component {
  render() {
    return (
      <div>
        <FirstClass /> <List />
      </div>

    )
  }
}

ReactDOM.render(
  <Reedee />,
  document.getElementById('root')
)

