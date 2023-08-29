import React from 'react'
import { NavLink } from "react-router-dom";
import "./worldwidecontract.css"


const WorldwideContract = () => {
  return (
    <>
      <div id="worldwide-image-container">
        <img
          id="worldwide-image"
          src="https://www.itechplacement.com/wp-content/uploads/2019/05/hr1-CONTRACT-staffing-570x350.jpg"
          alt=""
        />
        <h2 id="worldwide-heading">Worldwide Contract Staffing</h2>

        <div id="worldwide-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="worldwide-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="worldwide-current">Worldwide Contract Staffing</span>
        </div>
      </div>

      <div id="worldwide-content">
        <img
          src="https://themanagementtechnician.com/wp-content/uploads/2022/10/s7.jpg"
          alt=""
        />
        <div className="worldwide-data">
          <h1>Worldwide Contract Staffing</h1>
          <span>
            <p>
            With The Management Technician, recruitment is no longer a hassle.
            Geographical boundary is no longer a bar. Hire from anywhere. 
            Literally anywhere!
            </p>
            <p>
            Want to hire only for an hour? We have experts for you. Want 
            to hire only for a month? We have experts for you. Just want 
            your job done effectively without wasting time? We have experts 
            for you. Don’t want to waste energy in micromanaging your worker? 
            Don’t worry. You won’t feel the need for it.
            </p>
          </span>
        </div>
      </div>
        <p className="worldwide-data2">We have highly qualified professionals from around the world who 
           will meet your expectations and more. We do all the background 
           checks. We assume all the responsibility for any mishap. A 
           100% indemnity bond we offer. You don’t have to worry even 
           a bit. Try us. Contact now and keep the work going.</p>
    </>
  )
}

export default WorldwideContract