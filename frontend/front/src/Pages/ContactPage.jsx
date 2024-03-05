import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/header";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
