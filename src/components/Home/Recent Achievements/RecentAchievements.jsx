import React from 'react'


const AchievementsContainer = () => {
  return (
    <div class="supply-chain-outer-container">
        <div class="card-title"><i class="fa-solid fa-layer-group"></i></div>
      <div class="supply-chain-image-container">
        <h1>69</h1>
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

const RecentAchievements = () => {
  return (
    <div class="main-container">
      <h2 class="heading">Our Recent Achievements</h2>
      <div id="supply-chain-container">
        <AchievementsContainer />
      </div>
    </div>
  )
}

export default RecentAchievements