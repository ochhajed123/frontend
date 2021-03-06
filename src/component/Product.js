import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

/* Product is already linked bcz of <Link /> */
function Product({ product }) {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 15 : 20,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span>({product.numberOfReviews} Reviews)</span>
      </div>
      <span>{` Rs. ${product.price}`}</span>
    </Link>
  );
}

export default Product;
