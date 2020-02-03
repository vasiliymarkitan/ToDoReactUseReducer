import React from "react";
import "./styles.css";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <FilterList />
      <TodoList />
      <Form />
    </div>
  );
}
