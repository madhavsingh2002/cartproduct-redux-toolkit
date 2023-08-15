import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../redux/reducers/ProductSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const { products, loading } = useSelector((state) => state.products);
  const print = () => {
    console.log(products);
  };
  print();
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="row">
          <h1 className="text-center mt-5">All Products</h1>
          {loading && <h2 className="text-center">Loading...</h2>}
          <div className="product_container d-flex flex-wrap  gap-4 p-3" style={{}}>
          {products.map((item) => {
            return (
              <div className="card_container mt-5" >
                <div className="card" style={{ width: "18rem",height:'30rem', }}>
                  <img
                    src={item.image}
                    className="card-img-top p-1"
                    style={{ height: "225px" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title.split(" ").slice(0, 2).join(" ")}
                      {item.title.split(" ").length > 2 && "..."} </h5>
                    <p className="card-text" style={{height:'48px'}}>
                      {item.description.split(" ").slice(0, 6).join(" ")}
                      {item.description.split(" ").length > 6 && "..."}
                    </p>
                    <h4> {item.price} </h4>
                    <span> ⭐{item.rating.rate} </span>{" "}
                    <span> ( {item.rating.count} ) </span> <br />
                    <button type="button" onClick={()=>dispatch(AddToCart(item.id))} className="btn btn-outline-success mt-3 " >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
