import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeTodo(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  updateTodo(e){
    e.preventDefault();
    this.props.updateTodo(this.props.todo);
  }

  render(){
    if (this.props.todo.done) {
      this.text = 'Undo';
    } else{
      this.text = 'Done';
    }
    return(
      <li>
        {this.props.todo.title}
        <br/>
        <button onClick={this.removeTodo}>Delete</button>
        <button onClick={this.updateTodo}>{this.text}</button>
      </li>
    );
  }
}

export default TodoListItem;
