import React, { useContext } from "react";
import { Link } from "react-router-dom";

function BtnRender({ addToBasket, addToWishlist }) {
  return (
    <div className="row_btn">
      <button className="Update Product" onClick={addToBasket}>
        Update Product
      </button>
      <button className="Delete Product" onClick={addToWishlist}>
        Delete Product
      </button>
    </div>
  );
}

export default BtnRender;
