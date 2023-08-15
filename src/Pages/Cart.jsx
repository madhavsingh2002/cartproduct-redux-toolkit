import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCartItem } from "../redux/reducers/ProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);

  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {carts.length} items
                          </h6>
                        </div>
                        <hr className="my-4" />
                        {carts && Object.keys(carts).length > 0 ? (
                          carts.map((item) => {
                            return (
                              <>
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`${item.image}`}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-black mb-0">
                                      {item.title}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <h6 className="text-black mb-0">
                                      {item.category}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 className="mb-0">{item.price}</h6>
                                  </div>
                                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a className="text-muted">
                                      <span
                                        className="material-symbols-outlined"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          dispatch(RemoveCartItem(item.id))
                                        }
                                      >
                                        close
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <hr className="my-4" />
                              </>
                            );
                          })
                        ) : (
                          <h2 className="text-center">
                            Cart is Empty! Shop Now
                          </h2>
                        )}

                        <div className="pt-5 d-flex">
                          <h6 className="mb-0">
                            <Link to={"/"}>
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                          <h6 className="mx-auto">
                            Total Price : {totalPrice}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
