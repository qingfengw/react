import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <ul className="my-list">
        <li>{false?"谢一平":"毛倩"}</li>
      </ul>
    )
  }
}
export default App