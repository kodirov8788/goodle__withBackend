import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;
  const isActive = (index) => {
    if (tab === index) return "active";
    return "";
  };

  return (
    <>
      <div className="detail">
        <div className="detail__img">
          <img
            src={detailProduct.images[tab].url}
            alt={detailProduct.images[tab].url}
          />
          <div className="detail__smallImgs">
            {detailProduct.images.map((img, index) => (
              <img
                key={index}
                src={img.url}
                alt={img.url}
                onClick={() => setTab(index)}
                className={tab === index ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <span>$ {detailProduct.price}</span>

          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            Buy Now
          </Link>
        </div>
      </div>

      <div>
        <h2>Related products</h2>
        <div className="detail__products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
