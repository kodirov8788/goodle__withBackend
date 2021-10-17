import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import { BiMessageSquareCheck } from "react-icons/bi";
import { FiCheckCircle, FiAlertCircle, FiPlusCircle } from "react-icons/fi";
import "./Filter.css";
import Search from "./search/Search";
import Category from "./category/Category";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [category, setCategory] = state.productsAPI.category;
  const [search, setSearch] = state.productsAPI.search;
  // const handleCategory = (e) => {
  //   setCategory(e.target.value);
  //   setSearch("");
  // };

  return (
    <div className="filter__container">
      <div className="filter__menu">
        <Category />

        <div className="filter__collection">
          <li className="filter__collectionItem">
            <a href="#">Home</a>
          </li>
          <li className="filter__collectionItem">
            <a href="#">On Sale!</a>
          </li>
          <li className="filter__collectionItem">
            <a href="#">Blog</a>
          </li>
          <li className="filter__collectionItem">
            <a href="#">About us</a>
          </li>
        </div>
        <Search />
        {/* <div className="row sort">
          <span>Sort By: </span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="sort=newest">Newest</option>
            <option value="sort=oldest">Oldest</option>
            <option value="sort=-sold">Best sales</option>
            <option value="sort=-price">Price: Hight-Low</option>
            <option value="sort=price">Price: Low-Hight</option>
          </select>
        </div> */}
      </div>
    </div>
  );
}

export default Filters;
