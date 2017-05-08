import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import receiveTodo from './actions/todo_actions.js';


let store = configureStore();
window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<h1>Todos App</h1>, root);
});
