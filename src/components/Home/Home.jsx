import React from "react";
import Brands from "./Brands/Brands";
import { SupplyChain } from "./Supply Chain/SupplyChain";
import { Helmet } from "react-helmet";
import SliderCont from "./Slider/SliderCont"
import Innovation from "../Innovationex/Innovation";
import Customertest from "./Customerstest/Customertest";
import WhyChooseUs from "./Why Choose US/WhyChooseUs"
import RecentAchievements from "./Recent Achievements/RecentAchievements";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Lydian - Home</title>
      </Helmet>
      <SliderCont />
      <Customertest/>
      <Innovation/>
      <Brands />
      <SupplyChain />
      <WhyChooseUs />
      <RecentAchievements />
    </>
  );
};

export default Home;
