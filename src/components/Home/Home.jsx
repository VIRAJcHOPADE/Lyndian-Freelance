import React from "react";
import Brands from "./Brands/Brands";
import { SupplyChain } from "./Supply Chain/SupplyChain";
import { Helmet } from "react-helmet";
import SliderCont from "./Slider/SliderCont";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lydian - Home</title>
      </Helmet>
      <SliderCont />
      <Brands />
      <SupplyChain />
    </>
  );
};

export default Home;
