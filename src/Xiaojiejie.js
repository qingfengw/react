import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './Xiaojiejieitem'
class Xiaojiejie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['红烧肉', '回锅肉']
    }
    this.textInput = React.createRef();
    this.foucsTestInput = this.foucsTestInput.bind(this)
  }
  foucsTestInput(){
    this.textInput.current.focus();
  }
  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor="xieyiping">增加服务</label>
          <input 
          id="xieyiping" 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.inputChange}
          ref = {this.textInput}
         />
          <button onClick={this.addlist}>增加菜品</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <XiaojiejieItem
                  content={item}
                  key={index + item}
                  index={index}
                  //向子组件传一个方法
                  deletList={this.deletList.bind(this)}
                />)
            })
          }
        </ul>
      </Fragment>
    )
  }
  //输入列表项
  inputChange = () => {
    this.setState({
      inputValue: this.input.value
    })
  }
  //增加列表项
  addlist = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }
  deletList (index) {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
export default Xiaojiejie