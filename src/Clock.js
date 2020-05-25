import React, { Component } from 'react'
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(),
      name: 1
    }
  }
  componentDidMount () {
    this.timeID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount () {
    clearInterval(this.timeID);
  }
  tick () {
    this.setState({
      data: new Date()
    });
  }
  name () {

  }
  render () {
    return (
      <div>
        <h1>hello,world</h1>
        {/* <h2>{this.state.data.toLocaleTimeString()}</h2> */}
        <h2>{}</h2>
      </div>
    );
  }
}


export default Clock;