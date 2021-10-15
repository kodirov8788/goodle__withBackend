import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { MdHistoryToggleOff } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { FiPercent } from "react-icons/fi";

import "./mediaFooter.css";

function MediaFooter() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [userEmail] = state.userAPI.userEmail;
  // const [userEmail, setUserEmail] = useState([]);
  // console.log(userEmail);
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser} className="mediafooter__logout">
            <span>
              <BsPerson />
            </span>
            <div className="mediafooter__logoutEmail">
              <strong>{!userEmail.email ? "Login" : "Log Out"}</strong>
            </div>
          </Link>
        </li>
        <li className="mediafooter__history">
          <span>
            <MdHistoryToggleOff />
          </span>
          <Link to="/history">History</Link>
        </li>
      </>
    );
  };

  return (
    <div className="mediafooter">
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <ul>
        <li>
          <span>
            <FiPercent />
          </span>
          <Link to="/">aksiya</Link>
        </li>
        <li>
          <span>
            <BiShoppingBag />
          </span>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li>

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <span>
              <BsPerson />
            </span>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MediaFooter;
