import React, { PropTypes } from 'react'

class TodoControl extends React.Component {
  handleClick (id) {
    this.props.handleShow(id)
  }
  render () {
    let name = ['All','Active','completed'];
    let buttons = name.map( (item,index) =>
      <button key = {index} onClick = {this.handleClick.bind(this,index)}
        style = {this.props.show==index ? {backgroundColor:'rgba(255,0,0,0.3)',color:'#fff','border':'1px solid rgba(255,0,0,0.4)'} : null}>{item}</button>
    )
    return (
      <div>
        {buttons}
      </div>
    )
  }
}

export default TodoControl;
