import React, { useContext, useState } from "react";
import { BsThreeDots, BsSearch } from "react-icons/bs";
import { GlobalState } from "../../../GlobalState";

const Category = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [category, setCategory] = state.productsAPI.category;
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="filter__categories">
      <BsThreeDots />
      <select name="category" value={category} onChange={handleCategory}>
        <option value="">Categories</option>
        {categories.map((category) => (
          <option value={"category=" + category._id} key={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
