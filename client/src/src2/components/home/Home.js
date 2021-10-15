import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductItem from "../productItem/ProductItem";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useStateValue } from "../../StateProvider";

// import Loading from "../loading/Loading";

function Home() {
  const [{ category }, dispatch] = useStateValue();
  const [filtered, setFiltered] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/v3/all`)
      .then((res) => {
        setData(res.data);

        return res;
      })
      .catch((error) => {
        return error;
      });
    setFiltered(data.filter((product) => product.category === category));
  }, [category]);
  const tech = data.filter((product) => product.category === "technology");
  const clothes = data.filter((product) => product.category === "clothes");
  const sortData = filtered.sort(
    (d1, d2) =>
      new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime()
  );
  console.log(data);
  console.log(sortData);
  console.log("filterde", filtered);

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
  };
  return (
    <div className="home">
      <div className="home__container">
        <h1>Product</h1>

        <Slider {...settings}>
          {sortData.map((item, index) => (
            <ProductItem
              id={item.id}
              title={item.productname}
              price={item.price}
              rating={item.quantity}
              image={item.photo}
            />
          ))}
        </Slider>
      </div>
      <div className="home__container">
        <h1>Product</h1>
        <div className="home__product">
          <div className="home__row">
            <div className="home__row">
              <Slider {...settings}>
                {tech.map((item) => (
                  <ProductItem
                    id={item.id}
                    title={item.productname}
                    price={item.price}
                    rating={item.quantity}
                    image={item.photo}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="home__container">
        <h1>Product</h1>
        <div className="home__product">
          <div className="home__row">
            <div className="home__row">
              <Slider {...settings}>
                {clothes.map((item) => (
                  <ProductItem
                    id={item.id}
                    title={item.productname}
                    price={item.price}
                    rating={item.quantity}
                    image={item.photo}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
