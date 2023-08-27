import React from "react";
import "./DesignAudit.css";
const DesignAudit = () => {
  return (
    <>
      <img
        id="design-audit-image"
        src="https://themanagementtechnician.com/wp-content/uploads/2022/10/big.jpg"
        alt=""
      />
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
