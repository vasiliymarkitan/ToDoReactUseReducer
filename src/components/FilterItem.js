import React from "react";
import { SET_VISIBILITY_FILTER } from "../constants";

export default function FilterItem(props) {
  const { value, text, isActive, dispatch } = props;

  return (
    <div
      className={`filter-list__item ${
        isActive ? "filter-list__item_active" : ""
      }`}
      onClick={() => {
        dispatch({
          type: SET_VISIBILITY_FILTER,
          filter: value
        });
      }}
    >
      {text}
    </div>
  );
}
