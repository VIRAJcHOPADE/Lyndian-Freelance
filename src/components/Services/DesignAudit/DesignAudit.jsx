import React from "react";
import "./DesignAudit.css";
import { NavLink } from "react-router-dom";

const DesignAudit = () => {
  return (
    <>
      <div id="design-audit-image-container">
        <img
          id="design-audit-image"
          src="https://themanagementtechnician.com/wp-content/uploads/2022/10/big.jpg"
          alt=""
        />
        <h2 id="design-audit-heading">Design Audit</h2>

        <div id="design-audit-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="design-audit-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="design-audit-current">Design Audit</span>
        </div>
      </div>

      <div id="design-audit-content">
        <img
          src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
          alt=""
        />
        <div className="design-audit-data">
          <h1>Design Audit</h1>
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
    </>
  );
};

export default DesignAudit;
