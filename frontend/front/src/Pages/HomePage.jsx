import React from "react";
import Header from "../components/Layout/Header/header";
import Footer from "../components/Layout/Footer/Footer";
import Slider from "../components/Slider/Slider";
import Campaigns from "../components/campaigns/Campaigns";
import Categories from "../components/Categories/Categories";
import Products from "../components/Product/Products";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
