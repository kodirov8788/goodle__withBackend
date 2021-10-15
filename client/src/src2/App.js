import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider";
import CreateProduct from "./components/createProduct/CreateProduct";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  const [{ userEmail }, dispatch] = useStateValue();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get("/v2/posts");
  //     setData(res.data);
  //     return res;
  //   }
  //   fetchData();
  // }, []);
  // console.log(data);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      const userEmail = authUser.email;
      dispatch({
        type: "SET_USEREMAIL",
        userEmail: userEmail,
      });
      console.log("user Email...", userEmail);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  console.log("user Email...", userEmail);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/wishlist">
            <Header />
            <Wishlist />
          </Route>
          <Route path="/createproduct">
            <Header />
            <CreateProduct />
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
