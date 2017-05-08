import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState ={};
  switch(action.type) {
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;

    case RECEIVE_TODOS:

      action.todos.forEach((el) => {
        newState[el.id] = el;
      });
      return newState;

    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;

    case UPDATE_TODO:
      newState = merge({}, state);
      newState[action.todo.id].done ? newState[action.todo.id].done = false : newState[action.todo.id].done = true;

      return newState;

    default:
      return state;
  }
};

export default todosReducer;
