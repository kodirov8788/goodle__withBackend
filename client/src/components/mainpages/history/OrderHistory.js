import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";
import "./history.css";

function OrderHistory() {
  const state = useContext(GlobalState);
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        }
      };
      getHistory();
    }
  }, [token, isAdmin, setHistory]);

  return (
    <div className="history__page">
      <h2>History</h2>

      <h4>You have {history.length} orders</h4>

      {history.reverse().map((items) => (
        <div key={items._id}>
          <div className="orderHistory__container">
            <div className="orderHistory__name">
              <span>Name : {items.name}</span>
              <span>Email : {items.email}</span>
              <span>Phone Number : {items.number}</span>
              <span>Total Price: {items.total}</span>
              <span>
                Ordered Time : {new Date(items.createdAt).toLocaleDateString()}{" "}
              </span>
            </div>
            <ul className="orderHistory__listCollection">
              {items.cart.map((item) => (
                <li className="orderHistory__listItem" id={items.cart._id}>
                  <img
                    className="orderHistory__image"
                    src={item.images[0].url}
                    alt=""
                  />
                  <div className="orderHistory__text">
                    <span>
                      <b>Product Name </b>:<strong>{item.title}</strong>
                    </span>
                    <span>
                      <b>Product Price </b>:<strong>{item.price}$</strong>
                    </span>
                    <span>
                      <b>Product ID </b>:<strong>{item.product_id}</strong>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
