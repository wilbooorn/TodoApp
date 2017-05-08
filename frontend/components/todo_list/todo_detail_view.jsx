import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props){
    super(props);
    this.removeTodo = this.removeTodo.bind(this);

  }

  removeTodo(e){
    e.preventDefault();

    this.props.removeTodo(this.props.todo);
  }

  render(){
    return(
      <div>
        <button onClick={this.removeTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoDetailView;
