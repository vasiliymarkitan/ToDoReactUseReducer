import React from "react";
import "./TodoItem.css";
import { TOGGLE_TODO, DELETE_TODO } from "../constants";

export default function TodoItem(props) {
  const { id, text, completed, dispatch } = props;

  return (
    <div className={`todo-item ${completed ? "todo-item_checked" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch({
            type: TOGGLE_TODO,
            id: id
          });
        }}
      />
      <p className="todo-item__label">{text}</p>
      <button
        className="todo-item__remove"
        onClick={() => {
          dispatch({
            type: DELETE_TODO,
            id: id
          });
        }}
      >
        X
      </button>
    </div>
  );
}
