import React from "react";
import Header from "../components/Layout/Header/header";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer/Footer";

const CartPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <Footer />
    </React.Fragment>
  );
};

export default CartPage;
