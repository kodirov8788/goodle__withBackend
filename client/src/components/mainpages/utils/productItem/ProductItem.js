import React from "react";
import BtnRender from "./BtnRender";
import { sortFunction } from "../../../filter/Filters";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images[0].url} alt="" />

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <div className="product__price">
          <span>${product.price}</span>
          <span>${product.price}</span>
        </div>
        <p>{product.description}</p>
        <span className="product__sale">-20%</span>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductItem;
