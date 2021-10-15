import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Loading from "../loading/Loading";
import "./createProduct.css";
import { useHistory, useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function CreateProduct() {
  const [productname, setProductname] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [images, setImages] = useState("");
  const [quantity, setQuantity] = useState("");
  const [content, setContent] = useState("");
  const [{ userEmail }, dispatch] = useStateValue();

  console.log("woy", userEmail);
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      productname,
      description,
      category,
      price,
      images,
      quantity,
      content,
    };
    if (postData.category === "technology") {
      axios
        .post(`http://localhost:8000/v3/technology`, postData)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    } else if (postData.category === "clothes") {
      axios
        .post(`http://localhost:8000/v3/clothes`, postData)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    }
    if (postData.category === "shoes") {
      axios
        .post(`http://localhost:8000/v3/shoes`, postData)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    } else {
      axios
        .post(`http://localhost:8000/v2/books`, postData)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  return (
    <>
      {userEmail === "kodirov8788@gmail.com" ? (
        <form onSubmit={handleSubmit} className="create_product">
          <div>
            <div className="row">
              <label htmlFor="product_id">Product Name</label>
              <input
                type="text"
                name="firstName"
                value={productname}
                onChange={(e) => setProductname(e.target.value)}
              />
              <label htmlFor="product_id">Image Link</label>

              <input
                type="text"
                name="firstName"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              />
            </div>

            <div className="row">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="firstName"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="row">
              <label htmlFor="categories">Quantity: </label>
              <select
                name="category"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="">Please select a Quantity of Product</option>
                <option value="2" key="1">
                  2
                </option>
                <option value="3" key="2">
                  3
                </option>
                <option value="4" key="3">
                  4
                </option>
                <option value="5" key="3">
                  5
                </option>
              </select>
            </div>
          </div>

          <div>
            <div className="row">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                required
                value={description}
                rows="5"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="row">
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                name="content"
                id="content"
                required
                value={content}
                rows="7"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Please select a category</option>
                <option value="shoes" key="1">
                  shoes
                </option>
                <option value="clothes" key="2">
                  clothes
                </option>
                <option value="technology" key="3">
                  technology
                </option>
                <option value="books" key="4">
                  books
                </option>
              </select>
            </div>
            <button type="submit" className="createProduct__btn">
              create
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default CreateProduct;
