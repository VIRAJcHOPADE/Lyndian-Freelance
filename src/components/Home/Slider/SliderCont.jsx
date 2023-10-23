import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const SliderCont = () => {
  const index = useRef(0);
  const elements = [
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: `What is the productivity of your solution?`,
      ind: 0,
    },

    {
      image:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "How productive is your end user?",
      ind: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Are your Supply and Demand plans sensible?",
      ind: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "What if the price of Raw materials surges by 40%?",
      ind: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title:
        "Why should you produce in the first place if you can't even sell at the price you thought you would?",
      ind: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      title:
        "How much to buy and when to buy is often strategic discussion, your ROP/ROQ/MOQ etc.. are just gimmicks?",
      ind: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title:
        "Did you know that the risk of sudden price change can turn your S&OP upside down?",
      ind: 6,
    },
    {
      image:
        "https://images.unsplash.com/photo-1544639160-ea6a810ab181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      title:
        "Why do you even forecast, When you can replenish automatically based on consumption rate?",
      ind: 7,
    },
    {
      image:
        "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "What makes you think your inventory level is high?",
      ind: 8,
    },
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title:
        "Are you using market research data in your market demand forecasting?",
      ind: 9,
    },
    {
      image:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title:
        "How real are your lead times, do you even bother to update it based on reality?",
      ind: 10,
    },
    {
      image:
        "https://images.unsplash.com/photo-1488272690691-2636704d6000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      title:
        "Do you know the in built algorithm in Supply Chain software you decide to buy?",
      ind: 11,
    },
  ];

  const [image, setImage] = useState(elements[index.current].image);
  const [title, setTitle] = useState(elements[index.current].title);
  // const [title, setTitle] = useState(elements[7].title);
  const [ind, setInd] = useState(elements[index.current].ind);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      var num = Math.trunc(Math.random() * 20) + 1;
      num %= 12;
      // index.current = index.current + 1;
      // index.current = index.current % elements.length;
      // setImage(elements[index.current].image);
      // setTitle(elements[index.current].title);
      // setInd(elements[index.current].ind);
      setImage(elements[num].image);
      setTitle(elements[num].title);
      setInd(elements[num].ind);
    }, 7000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div id="slider">
      <img src={image} alt="" id="slider-img" />
      <p className={`slider-text${ind}`}>
        <span>{title}</span>
      </p>
    </div>
  );
};

export default SliderCont;
