import React, { useContext, useState } from "react";
import "./Sort.css";
import { GlobalState } from "../../../GlobalState";
import { BiSortDown } from "react-icons/bi";

const Sort = () => {
  const state = useContext(GlobalState);
  const [sort, setSort] = state.productsAPI.sort;

  return (
    <div className="sort">
      <BiSortDown />
      <select
        value={sort}
        // className={sorted ? "sort__select" : "sort__select__none"}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="sort=oldest">Oldest</option>
        <option value="sort=-sold">Best sales</option>
        <option value="sort=-price">Price: Hight-Low</option>
        <option value="sort=price">Price: Low-Hight</option>
      </select>
    </div>
  );
};

export default Sort;
