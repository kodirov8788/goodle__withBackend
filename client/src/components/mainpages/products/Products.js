import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";
import axios from "axios";
// import LoadMore from "./LoadMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Products() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [category] = state.productsAPI.category;

  ///////////////////////////////////////////////////////////////
  const [categoryName, setCategoryName] = useState([]);
  // console.log(categoryName);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      setCategoryName(res.data.products);
    };
    getProducts();
  }, []);

  ///////////////////////////////////////////////////////////////
  const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };
  //   const x = products.map((item) => item.category);
  //   console.log(products);
  const deleteProduct = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });

      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
  };
  console.log(products);
  // if (loading)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  return (
    <>
      <div className="product__top">
        {isAdmin && (
          <div className="delete-all">
            <span>Select all</span>
            <input type="checkbox" checked={isCheck} onChange={checkAll} />
            <button onClick={deleteAll}>Delete ALL</button>
          </div>
        )}
        {category === "" ? (
          <div className="products">
            <div className="products__container">
              <h1>Technologies</h1>
              <Slider {...settings}>
                {categoryName.map((product) => {
                  if (product.category === "615e2accc24f1c1b8160f968") {
                    return (
                      <ProductItem
                        key={product._id}
                        product={product}
                        isAdmin={isAdmin}
                        deleteProduct={deleteProduct}
                        handleCheck={handleCheck}
                      />
                    );
                  }
                })}
              </Slider>
            </div>

            <div className="products__container">
              <h1>Oyoq kiyim</h1>
              <Slider {...settings}>
                {categoryName.map((product) => {
                  if (product.category === "615fcf28fd1b2d1f6f48d60f") {
                    return (
                      <ProductItem
                        key={product._id}
                        product={product}
                        isAdmin={isAdmin}
                        deleteProduct={deleteProduct}
                        handleCheck={handleCheck}
                      />
                    );
                  }
                })}
              </Slider>
            </div>
          </div>
        ) : (
          <div className="products__all">
            {products.map((product) => {
              return (
                <ProductItem
                  key={product._id}
                  product={product}
                  isAdmin={isAdmin}
                  deleteProduct={deleteProduct}
                  handleCheck={handleCheck}
                />
              );
            })}
            {/* <LoadMore /> */}
          </div>
        )}

        {/* {products.length === 0 && <Loading />} */}
      </div>
    </>
  );
}

export default Products;
