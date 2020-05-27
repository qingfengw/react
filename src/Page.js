import React, { Component } from 'react'
class Page extends Component {
  constructor(props){
    super(props);
    this.state = {showWarning:true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  render() { 
    return (
      <div className="waring"></div>  
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
 
export default Page;