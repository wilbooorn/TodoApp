import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = { detail: false };
    this.updateTodo = this.updateTodo.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  updateDetail(e){
    e.preventDefault();
    if (this.state.detail) {
      this.setState({ detail: false });
    }
    else{
      this.setState({ detail: true });
    }
  }

  showDetails(){
    if (this.state.detail){
      return (<TodoDetailViewContainer todo={this.props.todo}/>);
    } else{
      return "";
    }
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
      <li onClick={this.updateDetail}>
        {this.props.todo.title}
        <br/>
        <button onClick={this.updateTodo}>{this.text}</button>
        {this.showDetails()}
      </li>
    );
  }
}

export default TodoListItem;
