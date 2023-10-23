import React from 'react';
import './Loknath.css';
import { Link } from 'react-router-dom';

const Denis = () => {
  return (
    <div className='conteam'>
    <div className='image-and-heading'>
      <img
        className='image'
        src='/Picture2.jpg'
        alt='Your Image'
      />
      <h1 className='centered-heading'>
        Denis Myagkov <br />
        Quantitative software Architect
      </h1>
    </div>
    <div className='container'>
      <div className='left-column'>
        <h2>Technical Expertise</h2>
        <hr /> {/* Add the <hr> tag after <h2> */}
        <ul className='expertise'>
          <li>High-load distributed systems</li>
          <li>Probabilistic and stochastic models </li>
          <li>Combinatorial and convex optimisation</li>
          <li>Risk-off financial portfolio models</li>
          <li>SAP PP/PM/CO/SD/MM/WMS/EWM</li>
        </ul>
        <h2>Clients</h2>
        <hr /> {/* Add the <hr> tag after <h2> */}
        <div className='clients-flex'>
          <ul className='column'>
            <li>Gazprom</li>
            <li>Lukoil</li>
            <li>Rosneft</li>
            <li>BP</li>
            <li>Metalloinvest</li>
          </ul>
          <ul className='column'>
            <li>Volvo</li>
            <li>Kamaz</li>
            <li>Sanofi</li>
            <li>Fonterra</li>
            <li>Takeda</li>
          </ul>
        </div>
        <h2>Industry Expertise</h2>
        <hr />
        <ul className='industry'>
          <li>Oil & Gas (downstream)</li>
          <li>Pharmaceuticals</li>
          <li>Automotive & Industrial machinery</li>
          <li>Banking</li>
          <li>FMCG</li>
        </ul>
      </div>
      <div className='right-column'>
        <h2>Selected Relevant Experience</h2>
        <hr />
        <ul className='experience'>
          <li>
          Developed Predictive Maintenance subsystem aimed at spaceports and workforce management for Field Service Management (FSM) solution utilised by Coca-Cola, Miele, Vaillant. In 2020 given it was main acceptance criteria for Gartner 
          to take whole FSM solution into the magic quadrant. 
          </li>
          <li>
          Developed SCN optimisations solution aimed at minimisation of operational costs for the biggest Russian vine and liquor distributor with more than 2000 shops.

          </li>
          <li>
          Developed asset management solution for the world biggest power grid company, including creation of maintenance plan, spare parts determination and allocation. 

          </li>
          <li>
          Developed distributed risk-neutral portfolio management solution aimed at autonomous calculation of capital allocation for private equity fund with 800+ billions derivative book.


          </li>
          <li>
          Developed tax optimisation solution serving cross border trade with the world biggest passenger car manufacturer for iron ore mining company. 

          </li>
          <li>
          Developed commodity hedging solution for the Top-3 European energy generating company.

          </li>
        
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Denis