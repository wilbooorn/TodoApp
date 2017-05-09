import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import {receiveTodo, receiveTodos} from './actions/todo_actions.js';
import {receiveStep, receiveSteps} from './actions/step_actions.js';
import Root from './components/root.jsx';


let store = configureStore();
window.store = store;
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.receiveStep = receiveStep;
window.receiveSteps = receiveSteps;


document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
