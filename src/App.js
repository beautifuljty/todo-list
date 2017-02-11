import React, { PropTypes } from 'react';
import TodoList from './TodoList';
import TodoControl from './TodoControl';


class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      items:[
        {title:'A',completed:false,id:1},
        {title:'B',completed:true,id:2}
      ],
      //0:all , 1:active , 2:completed
      show:0
    }
  }

  handleCompleted (id) {
    var index = this.state.items.findIndex(function (ele) {
      return ele.id == id
    })
    this.state.items[index].completed = !this.state.items[index].completed;
    this.setState({
      items:this.state.items
    })
  }
  handleDel (id) {
    var index = this.state.items.findIndex(function (ele) {
      return ele.id == id
    })
    this.state.items.splice(index,1);
    this.setState({
      items:this.state.items
    })
  }
  handleShow (index) {
    this.setState({
      show:index
    })
  }

  handleSubmit (e) {
    // let newItems = this.refs.input.value;
    // this.setState((prevState) => ({
    //   items: prevState.items.concat(newItems),
    // }));
    e.preventDefault();

    let inputValue = this.refs.input.value.trim();
    this.refs.input.value = null;
    if (inputValue == '') {
        this.refs.input.focus();
        return alert ('不能为空！')
    }
    let date = new Date();
    let newItems = {title:inputValue,completed:false,id:date.getTime()};
    this.state.items.push(newItems);
    this.setState({items:this.state.items})
  }



  render () {
    if (this.state.show == 0) {
      var showItems = this.state.items
    }else if (this.state.show == 1) {
      var showItems = this.state.items.filter(function(element){
        return element.completed == false
      })
    }else if (this.state.show == 2) {
      var showItems = this.state.items.filter(function(element){
        return element.completed == true
      })
    }

    return (
      <div>
          <h1>TODO</h1>
          <TodoList items= {showItems} handleCompleted={this.handleCompleted.bind(this)}
            handleDel={this.handleDel.bind(this)}/>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input placeholder='ADD' ref='input' className='add' />
            <button className='btn' type = 'submit'>ADD#{this.state.items.length}</button>
          </form>
          <TodoControl handleShow={this.handleShow.bind(this)} show={this.state.show}/>
      </div>
    )
  }
}


export default App;

//react组织跳转必须用 e.preventDefault() 不能用 return false;
