export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

function receiveTodos(todos){
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

function receiveTodo(todo){
  return {
    type: RECEIVE_TODO,
    todo
  };
}

export default { receiveTodo, receiveTodos };
