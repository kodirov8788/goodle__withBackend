import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import { BsThreeDots, BsSearch } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { FiCheckCircle, FiAlertCircle, FiPlusCircle } from "react-icons/fi";
import "./Filter.css";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;
  // console.log(categories);
  const [status, setStatus] = useState(false);
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter__container">
      <div className="filter__menu">
        {/* ---------------------------- Category----------------------- */}
        {/* <div
          className="filter__categories"
          onMouseOver={() => setStatus(true)}
          onMouseLeave={() => setStatus(false)}
        >
          <BsThreeDots />
          <div className="filter__categoryText">
            <p> {category !== "" ? category : "Category"}</p>
          </div>
          <ul
            className={status ? "filter__adderStatus" : "filter__categotyHide"}
          >
            {categories.map((category) => (
              <li
                className="filter__selectItem"
                onClick={() => setCategory(category.name)}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div> */}
        {/* ---------------------------- end of Category----------------------- */}
        {/* --------------- */}
        <div className="row">
          <span>Filters: </span>
          <select name="category" value={category} onChange={handleCategory}>
            <option value="">All Products</option>
            {categories.map((category) => (
              <option value={"category=" + category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {/* -------------- */}
        <ul className="filter__collection">
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
        </ul>
        <form className="filter__input">
          <input
            type="text"
            value={search}
            placeholder="Enter your search!"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <BsSearch />
        </form>
        <div className="row sort">
          <span>Sort By: </span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="sort=newest">Newest</option>
            <option value="sort=oldest">Oldest</option>
            <option value="sort=-sold">Best sales</option>
            <option value="sort=-price">Price: Hight-Low</option>
            <option value="sort=price">Price: Low-Hight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
