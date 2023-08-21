import React from "react";
import Brands from "./Brands/Brands";
import { SupplyChain } from "./Supply Chain/SupplyChain";
import Customertest from "./Customerstest/Customertest";

const Home = () => {
  return (
    <>
      <Brands />
      
      <SupplyChain/>
    </>
  );
};

export default Home;