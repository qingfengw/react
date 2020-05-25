import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render () {
    return (
      <li onClick={this.handleClick}>{this.props.avname}爱吃{this.props.content}</li>
    );
  }
  //删除一使用父组件中方法删除
  handleClick () {
    this.props.deletList(this.props.index)
  }
}
XiaojiejieItem.propTypes = {
  content:PropTypes.string,
  index: PropTypes.number,
  deletList: PropTypes.func
}
XiaojiejieItem.defaultProps = {
  avname: '蒋俊杰'
}
export default XiaojiejieItem;