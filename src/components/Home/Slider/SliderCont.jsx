import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const SliderCont = () => {
  const index = useRef(0);
  const elements = [
    {
      image:
        "https://hive.com/wp-content/uploads/2022/05/productivity-tips.png",
      title: "What is the productivity of your solution ?",
    },
    {
      image:
        "https://hive.com/wp-content/uploads/2022/05/productivity-tips.png",
      title: "How productive is your end user ?",
    },
    {
      image:
        "https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/02/17114045/Why-You-Shouldnt-Lie-on-Your-Resume-Even-If-You-Arent-Caught-2.jpg",
      title:
        "If you are internally reporting a Forecast Accuracy of 80% for most of your product locations, someone is lying. Find out for certain what your accuracy is.",
    },
  ];

  const [image, setImage] = useState(elements[index.current].image);
  const [title, setTitle] = useState(elements[index.current].title);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      console.log(index.current);
      index.current = index.current + 1;
      index.current = index.current % elements.length;
      setImage(elements[index.current].image);
      setTitle(elements[index.current].title);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div id="slider">
      <img src={image} alt="" id="slider-img" />
      <p>{title}</p>
    </div>
  );
};

export default SliderCont;
