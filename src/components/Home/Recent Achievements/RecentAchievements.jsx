import React from 'react'
import "./RecentAchievements.css"



const AchievementsContainer = ({svg, number, title}) => {
  return (
    <div className="feature-box">
          <div className="number-container">
          <i className={`icon ${svg}`}></i>
            <span className="number">{number}</span>
          </div>

          <h3 className="feature-title">{title}</h3>
        </div>
  );
};

const RecentAchievements = () => {
  const achievement_content = [
    {
      "svg":"fa-solid fa-layer-group",
      "number":"65",
      "title":"Annual Projects",
    },
    {
      "svg":"fa-solid fa-trophy",
      "number":"55",
      "title":"Team Members",
    },
    {
      "svg":"fa-solid fa-globe",
      "number":"21",
      "title":"Partners",
    },
    {
      "svg":"fa-sharp fa-regular fa-heart",
      "number":"74",
      "title":"Happy Customers",
    },
  ]
  return (
    <section className="white-section" id="features">
      <div class="main-container">
      <h2 class="heading">Our Recent Achievement.</h2>
      </div>
    <div className="container-fluid">
      <div className="row">
        {
        achievement_content.map((ele,key) => (<AchievementsContainer svg={ele.svg} number={ele.number} title={ele.title} key={key}/>)
        )}
        

      </div>
    </div>
  </section>
  )
}

export default RecentAchievements