import React from "react";
import { Link } from "react-router-dom";
// import PaypalExpressBtn from "react-paypal-express-checkout";

const PaypalButton = ({ total, tranSuccess }) => {
  return (
    <div className="payment__btn" total={total} tranSuccess={tranSuccess()}>
      <Link to="/">Order</Link>
    </div>
  );
};

export default PaypalButton;
