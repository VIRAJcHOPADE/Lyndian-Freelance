import React from "react";
import "./WhyChooseUs.css";
import { NavLink } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us-choose-area">
      <div id="why-choose-us-container">
        <div id="why-choose-us-feature_main_wrap">
          <div id="why-choose-us-row" className="align-items-centre">
            <div id="why-choose-us-column">
              <img
                id="why-choose-us-about-image"
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
            <div id="why-choose-us-column">
              <div id="why-choose-us-features_info">
                <h2>Why Choose Us?</h2>
                <p>
                  At Lydian, we bridge the gap between business and technology
                  consultancy, creating pragmatic, cost-efficient solutions in a
                  dynamic enterprise environment. Choose us for:
                </p>
                <ul>
                  <li>Ethical Distinction</li>
                  <li>Streamlined Onboarding</li>
                  <li>Resource Optimization Expertise</li>
                  <li>Objective Business Recommendations</li>
                  <li>Advanced Consultant Proficiency</li>
                  <li>Exhaustive Search for Optimal Solutions</li>
                </ul>
                <div id="why-choose-us-about-btn">
                  <NavLink id="why-choose-us-boxed-btn3-line" to={"/about-us"}>
                    About Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
