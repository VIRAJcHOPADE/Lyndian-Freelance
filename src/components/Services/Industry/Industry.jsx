import React from 'react'
import "./industry.css"
import { NavLink } from "react-router-dom";

const Industry = () => {
  return (
    <>
    <div id="industry-image-container">
      <img
        id="industry-image"
        src="https://www.automationmag.com/wp-content/uploads/2020/10/GettyImages-962404026-copy-e1603224350223.jpg"
        alt=""
      />
      <h2 id="industry-heading">Industry 4.0 Advisory</h2>

      <div id="industry-crumbs">
        <NavLink to={"/"}>Home</NavLink>
        <span className="industry-gap">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <span className="industry-current">Industry 4.0 Advisory</span>
      </div>
    </div>

    <div id="industry-content">
      <img
        src="https://themanagementtechnician.com/wp-content/uploads/2022/10/s3.jpg"
        alt=""
      />
      <div className="industry-data">
        <h1>Industry 4.0 Advisory</h1>
        <span>
          <p>
          The Management Technician specializes in helping corporations excel
          in the era of fourth industrial revolution ― Industry 4.0. We have 
          the database of the most reliable experts from all over the world 
          who will assist you in Supply Chain Planning&Scheduling, Integrated 
          Business Planning, Application Integration, Internet of Things, 
          Predictive Analytics and Machine Learning, Robotics, Process Automation, 
          Cyber-Security, Digital Twin, Blockchain et cetera.
          </p>
          <p>
          At The Management Technician, we believe that the success of your 
          corporation is inextricably linked to the personnel you hire. 
          Your organization swims or sinks in tandem with those you select. 
          Our priority is to make sure you never see failure on that front. 
          Contact us today and hire our top-notch experts.
          </p>
          <p>Let us together bloom in the wonderful era we are in.</p>
        </span>
      </div>
    </div>
  
  </>
  )
}

export default Industry