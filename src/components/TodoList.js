import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/ac";
import "./TodoList.css";
import { VisibilityFilters } from "../redux/ac";

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  const todoItems = todos.map(item => (
    <TodoItem
      key={item.id}
      id={item.id}
      text={item.text}
      completed={item.completed}
      handleChange={handleToggleTodo}
      handleDelete={handleDeleteTodo}
    />
  ));

  return <div className="todo-list">{todoItems}</div>;
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_DONE:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_UNDONE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknow filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => dispatch(toggleTodo(id)),
  handleDeleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
