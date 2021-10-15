import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { getBasketTotal, getWishlistTotal } from "../../reducer";
// import { getWishlistTotal } from "../../reducer2";

function Header() {
  const [menu, setMenu] = useState(false);
  const [{ basket, wishlist, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(user);

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">Goodle</Link>
        </h1>
        <div className="dot"></div>
      </div>

      <ul style={styleMenu}>
        <li>
          <span>
            <BsPerson />
          </span>
          <Link to="/login" onClick={handleAuthenticaton}>
            <b>{!user ? "my account" : user.email.match(/^.+(?=@)/)[0]}</b>
          </Link>
        </li>
        <li>
          <span>
            <FiHeart />
            <b>{wishlist?.length}</b>
          </span>
          <Link to="/wishlist">Wishlist : </Link>
          <span>${Number(getWishlistTotal(wishlist)).toFixed(2)}</span>
        </li>
        <li>
          <Link to="/checkout">
            <span>
              <FiShoppingBag />
            </span>
            Your Cart :<span>${Number(getBasketTotal(basket)).toFixed(2)}</span>
          </Link>
        </li>

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {/* {isAdmin ? (
        ""
      ) : (
        <div className="cart__icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      )} */}
    </header>
  );
}

export default Header;
