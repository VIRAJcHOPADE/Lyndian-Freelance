import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const SliderCont = () => {
  const index = useRef(0);
  const elements = [
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "What is the productivity of your solution ?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "How productive is your end user ?",
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
      <p>
        <span>{title}</span>
      </p>
    </div>
  );
};

export default SliderCont;
