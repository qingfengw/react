import React, { Component } from 'react'
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.hadleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }
  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }
  render () {
    let button;
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      button = <LoginControl onClick={this.handleLogoutClick}/>
    }
    return (
      <div id="root">
        <LoginControl isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginControl;