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
          <div className='clients-flex'>
            <ul className='column'>
              <li>CPG/FMCG</li>
              <li>Dairy</li>
              <li>Building Materials and Paints</li>
              <li>Garden products</li>
              
            </ul>
            <ul className='column'>
              <li>Mining</li>
              <li>Metal Processing</li>
              <li>Nuclear Medicine</li>
              <li>Beverages and drinks</li>
              
            </ul>
          </div>
        </div>
        <div className='right-column'>
          <h2 className='teamh2'>Selected Relevant Experience</h2>
          <hr className='teamhr'/>
          <h3>SAP IBP Implementation and Rollout:  Over 6 Years</h3>
          <ul className='experience'>
            <li>
            Solution architecture, business  blueprint and detailed design of SAP IBP Solution in the area of Demand Planning, Demand Sensing, Inventory optimization, S&OP and Supply & Response

            </li>
            <li>
            Data modelling and integration of master data, sales history and planning data with SAP ECC/S4HANA

            </li>
            <li>
            System configuration, integration, data modeling, training and post go live stabilisation

            </li>
            <li>
            Expert consulting on PIR and MRP in SAP ECC/S4HANA

            </li>
            <li>
            Key Clients: DuluxGroup, Asahi (including CUB), South32, ANSTO
            </li>
          </ul>

          <h3>SAP APO Projects:	Over 10 Years</h3>
          <ul className='experience'>
            <li>
            Business case, solution architecture, business  blueprint and detailed design of SAPAPO Solution :Demand Planning, SNP Optimisation, SNP CTM, Heuristics, Deployment, TLB, GATP and PP/DS

            </li>
            <li>
            System configuration, integration, data modeling, training and post go live stabilisation

            </li>
            <li>
            Key Clients: Fonterra, Murray Goulburn (Now Saputo), Burra Foods

            </li>
           
          </ul>

          <h3>SAP ECC Projects: 5 Years</h3>
          <ul className='experience'>
            <li>
            Design and implementation of SAP PP- MRP, Production orders, REM ,PPPI; LDM, DMS, cFolders, ECM.

            </li>
            <li>
            Integration of Infor and JDA planning system with SAP ECC

            </li>
            <li>
            Key Clients: NTPC India, Essar Group, Hy Grade Pellets Ltd, CUB Australia. Burra Foods Australia
            
            </li>
           
          </ul>

          <h3>SAP Training : 4 Years</h3>
          <ul className='experience'>
            <li>
            SAP Academy trainer for SAP Manufacturing, SCM APO, LDM 

            </li>
            <li>
            Have trained over 500 SAP PP consultants and over 100 APO consultants.
            </li>
            <li>
            Key clients: SAP Education, SISL, Genovate, Accenture, Wipro, HCL, Nat Steel Singapore, NPTC Ltd.
            
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Raghunath