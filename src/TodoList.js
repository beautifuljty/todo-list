import React, { PropTypes } from 'react'

class TodoList extends React.Component {

  handleChange (id) {
    this.props.handleCompleted(id);
  }
  handleDelete (id) {
    this.props.handleDel(id);
  }


  render () {
    let list = this.props.items.map( item =>
      <div key = {item.id}>
        <input type = 'radio' checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
        <span className='title' style = {item.completed ? {textDecoration:'line-through',color:'red'} : null}>{item.title}</span>
        <button className='btn' onClick={this.handleDelete.bind(this,item.id)}>Delete</button>
      </div>
    )
    return (
      <div>{list}</div>
    )
  }
}

export default TodoList;
