import React from "react";

export default function FilterItem(props) {
  const { value, text, isActive, handleChangeFilter } = props;

  return (
    <div
      className={`filter-list__item ${
        isActive ? "filter-list__item_active" : ""
      }`}
      onClick={() => {
        handleChangeFilter(value);
      }}
    >
      {text}
    </div>
  );
}
