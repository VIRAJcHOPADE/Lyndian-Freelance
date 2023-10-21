import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="choose-area">
      <div className="container">
        <div className="feature_main_wrap">
          <div className="row align-items-centre">
            <div className="column">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
            </div>
            <div className="column">
              <div className="features_info">
                <h2>Why Choose Us?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti dolores consectetur blanditiis molestias, velit
                  similique beatae ullam dolor consequuntur
                </p>
                <ul>
                  <li>Ethical Distinction</li>
                  <li>Streamlined Onboarding</li>
                  <li>Resource Optimization Expertise</li>
                  <li>Objective Business Recommendations</li>
                  <li>Advanced Consultant Proficiency</li>
                  <li>Exhaustive Search for Optimal Solutions</li>
                </ul>
                <div className="about-btn">
                  <a className="boxed-btn3-line" href="/about-us">
                    About Us
                  </a>
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
