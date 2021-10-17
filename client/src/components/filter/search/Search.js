import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  function hundleSearch(e) {
    e.preventDefault();
    setSearch("");
  }
  const state = useContext(GlobalState);
  const [search, setSearch] = state.productsAPI.search;
  return (
    <form className="filter__input" onSubmit={hundleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter your search!"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default Search;
