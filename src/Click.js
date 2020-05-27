import React, { Component } from 'react'
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick  () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log('你点击了我')
  }
  render () {
    return (
      <button onClick={(e)=>this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;