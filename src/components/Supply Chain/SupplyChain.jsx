import React from "react";
import "./SupplyChain.css";

const ChainContainer = () => {
  return (
    <div class="supply-chain-image-container">
      <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000025_1550237330_codezen_2.png" />
      <div class="supply-chain-details">
        <p>
          Few research papers of parts of webinar related to new technology
          development in supply chain.
        </p>
      </div>
    </div>
  );
};

export const SupplyChain = () => {
  return (
    <div class="main-container">
      <h2 class="heading">What's happening in supply chain.</h2>
      <div id="supply-chain-container">
        <ChainContainer />
        <ChainContainer />
        <ChainContainer />
        <ChainContainer />
      </div>
    </div>
  );
};
