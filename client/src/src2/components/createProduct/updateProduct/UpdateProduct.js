import React from "react";
import "./updateproduct.css";
import UpdateBtn from "./UpdateBtn";
import { useStateValue } from "../../StateProvider";

function UpdateProduct({ id, title, price, image, rating }) {
  const [{ basket, wishlist }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const addToWishlist = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product_card">
      <img src={image} alt="" />

      <div className="product_box">
        <h2>{title}</h2>
        <span>${price}</span>
      </div>
      <p>{title}</p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>

      <UpdateBtn addToBasket={addToBasket} addToWishlist={addToWishlist} />
    </div>
  );
}

export default UpdateProduct;
