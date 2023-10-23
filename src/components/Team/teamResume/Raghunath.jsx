import React from 'react';
import './Loknath.css';
import { Link } from 'react-router-dom';

const Raghunath = () => {
  return (
    <div className='conteam'>
      <div className='image-and-heading'>
        <img
          className='teamimage'
          src='/Picture1.jpg'
          alt='Your Image'
        />
        <h1 className='teamh1 centered-heading'>
        Raghunath Gupta,Supply Chain Planning and Manufacturing Expert <br />
        SAP IBP, APO and SCM Manufacturing
        </h1>
      </div>
      <div className='teamcontainer'>
        <div className='left-column'>
          <h2 className='teamh2'>Functional Expertise</h2>
          <hr className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <ul className='expertise'>
            <li>SAP IBP, Demand Planning, Supply and <br /> 
                Response, Inventory Optimization, S&OP</li>
            <li>SAP SCM/APO/DP/SNP/PP&DS/GATP/VC</li>
            <li>Software Evaluation</li>
          </ul>
          <h2 className='teamh2'>Clients</h2>
          <hr  className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <div className='clients-flex'>
            <ul className='column'>
              <li>Fonterra</li>
              <li>Saputo</li>
              <li>Asahi</li>
              <li>CUB</li>
              <li>Burra Foods</li>
            </ul>
            <ul className='column'>
              <li>Dulux Group</li>
              <li>South 32</li>
              <li>ANSTO</li>
              <li>NTPC India</li>
              <li>Essar Group</li>
            </ul>
          </div>
          <h2 className='teamh2'>Industry Expertise</h2>
          <hr className='teamhr'/>
          <ul className='industry'>
            <li>Pharmaceuticals</li>
            <li>Petrochemicals</li>
            <li>Agri Business</li>
            <li>CPG/FMCG</li>
            <li>Dairy</li>
          </ul>
        </div>
        <div className='right-column'>
          <h2 className='teamh2'>Selected Relevant Experience</h2>
          <hr className='teamhr'/>
          <ul className='experience'>
            <li>
            Developed a utility (in ABAP) to check and maintain costs and penalties and other planning relevant
master data towards implementation of Supply Network Optimizer at a large Alco Bev company.
            </li>
            <li>
            Integrated Market Share (value and volume) and Annual Business Targets in Operational Demand
Planning (APO DP) at a large CPG firm in SE Asia. (Solution originally implemented by me)
            </li>
            <li>
            Completed 18 roll outs of Demand and Merchandise Planning in 11 months (5 months ahead of
time) for a well-known German Sports Apparel company.
            </li>
            <li>
            Led the supply chain track of an SLO – ERP Merger of two large specialty packaging firms – Reverse
engineered the current planning solution that the acquired entity wanted to safeguard. This was an
application with 11 customer name spaces whose integration with ERP had to be managed at any
cost!
            </li>
            <li>
            Did original research on solving the problem of Grade Sequence Optimization (Grade Transition
Matrix) for a Global Petrochemical company in Saudi Arabia.
            </li>
            <li>
            Curated (integration) an APO box connected to 17 ECC systems in a well-known Pharma Company
            </li>
            <li>
            Implemented a set of Macros to measure Promotions Demand sensitivity Analysis on SAP APO (the
in-built capability being just about rudimentary) for a major American ready to cook foods company
            </li>
            <li>
            Analyzed Lot Size Vs returns (%) hypothesis (big lot size = returns &gt; 3%?) for a well-known Indian
Pharmaceutical company as a part of self-initiated project for SKU Rationalization in light of
shelf-life driven losses and returns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Raghunath