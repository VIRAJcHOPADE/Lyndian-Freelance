import React from "react";
import "./EffortEstimationAndValidation.css";
import { NavLink } from "react-router-dom";

const EffortEstimationAndValidation = () => {
  return (
    <div id="effort-estimation-and-validation-container">
      <div id="effort-estimation-and-validation-image-container">
        <img
          id="effort-estimation-and-validation-image"
          src="https://themanagementtechnician.com/wp-content/uploads/2022/10/win.jpg"
          alt=""
        />
        <h2 id="effort-estimation-and-validation-heading">
          Effort Estimation and Validation
        </h2>

        <div id="effort-estimation-and-validation-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="effort-estimation-and-validation-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="effort-estimation-and-validation-current">
            Effort Estimation and Validation
          </span>
        </div>
      </div>

      <div id="effort-estimation-and-validation-content">
        <img
          src="https://themanagementtechnician.com/wp-content/uploads/2022/10/s1.jpg"
          alt=""
        />
        <div className="effort-estimation-and-validation-data">
          <h1>Effort Estimation And Validation</h1>
          <span>
            <p>
              Having doubts about your products? Want to make sure its
              accessible? Or if its UI is fine? Or if the message you’re sending
              is consistent and on point? Thinking of seeking professional
              guidance?
            </p>
            <p>
              The Management Technician is here for you. Our highly qualified
              and trustworthy experts will do an audit of your design and will
              let you know if its “Just-so” or “Amazing.”
            </p>
            <p>Just drop a text/call to us. We’re always here for you.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EffortEstimationAndValidation;
