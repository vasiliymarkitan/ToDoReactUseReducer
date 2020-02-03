import React, { useReducer } from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";
import Form from "./components/Form";

import { VisibilityFilters } from "./constants";
import { reducer, initialState } from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <FilterList filter={state.visibilityFilter} dispatch={dispatch} />
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        dispatch={dispatch}
      />
      <Form dispatch={dispatch} />
    </div>
  );
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_DONE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_UNDONE:
      return todos.filter(t => t.completed);
    default:
      throw new Error("Unknow filter: " + filter);
  }
};
