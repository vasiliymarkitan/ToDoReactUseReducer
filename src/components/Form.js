import React, { useState } from "react";
import "./Form.css";
import { connect } from "react-redux";
import { addTodo } from "../redux/ac";

const Form = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    value && handleAddTodo(value);
    setValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Введите текст"
        onChange={handleChange}
        value={value}
      />
      <input type="submit" value="Отправить" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  handleAddTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
