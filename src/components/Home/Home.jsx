import React from "react";
import Brands from "./Brands/Brands";
import { SupplyChain } from "./Supply Chain/SupplyChain";
import { Helmet } from "react-helmet";
import WhyChooseUs from "./Why Choose US/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lydian - Home</title>
      </Helmet>
      <Brands />
      <SupplyChain />
      <WhyChooseUs />
    </>
  );
};

export default Home;
