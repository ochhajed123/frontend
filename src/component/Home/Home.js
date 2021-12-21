import React, { Fragment, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import "./Home.css";
import Product from "../Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // get data from redux state
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  ); // A hook to access the redux store's state. This hook takes a selector function as an argument.

  useEffect(() => {
    // To use "react-alert" for displaying error msg
    // Not working
    if (error) {
      return alert.show("error");
    }
    // dispatch function to get products on page load
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Ecom" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find Amazing Products Below</h1>

            <a href="#container">
              <button>
                Scroll
                <FaBeer />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {/** We will display Products Here from redux */}
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
