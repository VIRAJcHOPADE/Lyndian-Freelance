import React from "react";
import "./SupplyChain.css";

const ChainContainer = () => {
  return (
    <div class="supply-chain-outer-container">
        <div class="card-title">Title line</div>
      <div class="supply-chain-image-container">
        <img src="https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/resources/Kinaxis-Concurrency%20is%20key%20for%20todays%20complex%20supply%20chains.webp?itok=KbCTin_n" />
        <div class="supply-chain-details">
          <p>
            Few research papers of parts of webinar related to new technology
            development in supply chain.
          </p>
        </div>
      </div>
      <p>
        Few research papers of parts of webinar related to new technology
        development in supply chain.
      </p>
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
