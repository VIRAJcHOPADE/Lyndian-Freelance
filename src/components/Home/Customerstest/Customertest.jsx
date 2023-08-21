import React from 'react'
import "./Customertest.css"
import Carousel from "framer-motion-carousel";


const Customertest = () => {
  const elements = [
    {
      image:
        "https://www.kinaxis.com/sites/default/files/paragraphs/hero/kinaxis-supply-chain-solution.webp",
      title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
    {
      image:
        "https://hive.com/wp-content/uploads/2022/05/productivity-tips.png",
      title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
    {
      image:
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
      title:
        "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://www.kinaxis.com/sites/default/files/paragraphs/hero/kinaxis-supply-chain-solution.webp",
  title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
},
{
  image:
    "https://hive.com/wp-content/uploads/2022/05/productivity-tips.png",
  title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
},
{
  image:
    "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
  ];
  return (
    <>
<div class="main-container">
<h2 class="headingcoustomer">Customer stories</h2>

<div class="containercostumer">
     {elements.map((ele, key) => (
        <>
          {/* <img src={ele.image} alt="" />
          <p>{ele.title}</p> */}
        <div class="costumercard">

          <div class="content">
          <div class="img"><img src="{ele.image}"></img></div>
            <div class="cardContent">
              <h3>Hock Seng Oh
            <br></br><span>Governance Manager</span></h3>
            </div>    
          </div>
          <p>{ele.title}</p>      
        </div>
        </>
      ))}
    </div>
    </div>
    
    </>
  )
}

export default Customertest