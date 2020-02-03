import React from "react";
import "./FilterList.css";
import FilterItem from "./FilterItem";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/ac";
import { VisibilityFilters } from "../redux/ac";

const FilterList = ({ filter, handleChangeFilter }) => {
  const filterData = [
    { value: VisibilityFilters.SHOW_ALL, text: "Все" },
    { value: VisibilityFilters.SHOW_DONE, text: "Незавершенные" },
    { value: VisibilityFilters.SHOW_UNDONE, text: "Завершенные" }
  ];

  const filters = filterData.map(item => {
    const isActive = filter === item.value;

    return (
      <FilterItem
        key={item.value}
        value={item.value}
        text={item.text}
        isActive={isActive}
        handleChangeFilter={handleChangeFilter}
      />
    );
  });

  return <div className="filter-list">{filters}</div>;
};

const mapStateToProps = state => ({
  filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  handleChangeFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
