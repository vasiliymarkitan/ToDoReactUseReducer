import { combineReducers } from "redux";
import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO
} from "./ac";
import todosData from "../todosData";
const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: todosData
};

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random()
            .toString(16)
            .slice(-6),
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    case DELETE_TODO:
      return [...state.filter(item => item.id !== action.id)];
    default:
      return state;
  }
}

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
