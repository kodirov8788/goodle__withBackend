import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { BsCartPlus, BsSearch, BsThreeDots } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import I18n from "../../I18n";
import Category from "../filter/category/Category";
import Search from "../filter/search/Search";

function Header() {
  const { t, i18n } = useTranslation();

  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [userEmail] = state.userAPI.userEmail;
  // const [userEmail, setUserEmail] = useState([]);
  // console.log(userEmail);
  const [categories] = state.categoriesAPI.categories;
  const [category, setCategory] = state.productsAPI.category;
  const [search, setSearch] = state.productsAPI.search;
  const [status, setStatus] = useState(false);

  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };
  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/" onClick={logoutUser} className="header__logout">
            <span>
              <BsPerson />
            </span>
            <div className="header__logoutEmail">
              <strong>
                {!userEmail.email
                  ? "my account"
                  : userEmail.email.match(/^.+(?=@)/)[0]}
              </strong>
            </div>
          </Link>
        </li>
        <li className="header__history">
          <span>
            <BiShoppingBag />
          </span>
          <Link to="/history">History</Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header className={`header ${show && "header header__black"}`}>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <Link to="/">
          Goodle
          <span className="dot"></span>
        </Link>
      </div>
      <div className="header__phoneNumber">
        {!show && <h5>{t("Contact__Number")} : </h5>}

        <h3>(93)942-7899</h3>
      </div>
      {show && (
        <>
          <div className="header__category">
            <Category />
          </div>
          <Search />
        </>
      )}
      <ul style={styleMenu}>
        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <span>
              <BsPerson />
            </span>
            <Link to="/login">{t("Login")}</Link>
          </li>
        )}

        <li className="header__collectionItem">
          <a href="/">Home</a>
        </li>
        <li className="header__collectionItem">
          <a href="#">On Sale!</a>
        </li>
        <li className="header__collectionItem">
          <a href="#">Blog</a>
        </li>
        <li className="header__collectionItem">
          <a href="#">About us</a>
        </li>

        {/* <li className="header__product">
          <span>
            <BiShoppingBag />
          </span>
          <Link to="/">{isAdmin ? "Products" : "Shop"}</Link>
        </li> */}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>

        {isAdmin ? (
          ""
        ) : (
          <div className="cart__icon">
            <span>{cart.length}</span>
            <Link to="/cart">
              <BsCartPlus />
            </Link>
          </div>
        )}
      </ul>
    </header>
  );
}

export default Header;
