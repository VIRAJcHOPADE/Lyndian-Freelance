import React from 'react'
import "./Customertest.css"
import Carousel from "framer-motion-carousel";


const Customertest = () => {
  const elements = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
      title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
      title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
      title:
        "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
  title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
},
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
  title: "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
},
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
  title:
    "If you are Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUELL2iTMsxkbPaMrAKaxl4cHbbF80CsKek4lGOzlR6A&s",
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
          <div class="img"><img src={ele.image}></img></div>
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