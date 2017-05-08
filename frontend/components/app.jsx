import React from 'react';
import TodoList from './todo_list/todo_list_container';

class App extends React.Component {

  render(){
    return (
      <div>
        <h1>Todos App</h1>
        <TodoList />
      </div>
  );
  }
}

export default App;
