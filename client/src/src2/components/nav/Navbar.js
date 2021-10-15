import React, { useState } from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { useStateValue } from "../../StateProvider";

const Navbar = () => {
  const [{ category }, dispatch] = useStateValue();

  // const [selectNav, setSelectNav] = useState(false);
  // console.log(selectNav);
  return (
    <div className="nav">
      <div className="Navbar__fade" />
      <div className="nav__container">
        {/* <div
          className="nav__categories"
          // onClick={(e) => setSelectNav(!selectNav)}
          // onMouseLeave={(e) => setSelectNav(!selectNav)}
        > */}
        <label htmlFor="categories">Categories: </label>

        <div className="row">
          <select
            name="category"
            onChange={(e) => {
              dispatch({
                type: "SET_CATEGORY",
                category: e.target.value,
              });
            }}
          >
            <option value="">Please select a category</option>
            <option value="all" key="1">
              All
            </option>
            <option value="shoes" key="1">
              shoes
            </option>
            <option value="clothes" key="2">
              clothes
            </option>
            <option value="technology" key="3">
              technology
            </option>
          </select>
        </div>

        <span>
          <BsThreeDots />
        </span>
        {/* </div> */}
        <div className="nav__seperator">
          <div className="nav__Collection">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop Style</a>
            </li>
            <li>
              <a href="/createproduct">Dashboard</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">On Sale !</a>
            </li>
          </div>
          <div className="nav__searchBar">
            <input type="text" placeholder="Search your products" />
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
