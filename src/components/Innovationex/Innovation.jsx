import React from 'react'
import "./Innovation.css"

const InnovationContainer = () => {
    const elements = [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
          title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
        },
    ];
return (
    <>
    <div class="Innovation-outer-container">
        <div class="Innovationcard-title">Title line</div>
      <div class="Innovation-image-container">
        <img src="https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/resources/Kinaxis-Concurrency%20is%20key%20for%20todays%20complex%20supply%20chains.webp?itok=KbCTin_n" />
        <div class="Innovation-details">
          
        </div>
      </div>
      <p>
        Few research papers of parts of webinar related to new technology
        development in supply chain.
      </p>
    </div>
    </>
)
}
const Innovation = () => {
    
  return (
    <>
    {/* <div class="Innovation-main-container">
    <h2 class="headingInnovation">Innovation and expertise in your industry</h2>
    <div id="InnovationInnovation-container">
        <InnovationContainer />
      </div>

    </div> */}

    <a style={{textDecoration:"none"}} href="https://www.kinaxis.com/en">
    <div class="hover-container">
      <div class="hover-content">
        <img class="Innovationimage" src="https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/plane-icon-white.png.webp?itok=qZ7ObwqD" alt="" />
        <p class="InnovationP">Aerospace and defense</p>
      </div>
    </div>
    </a>
   
    </>
  )
}

export default Innovation