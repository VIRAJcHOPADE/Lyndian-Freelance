import React from 'react';
import './Loknath.css';
import { Link } from 'react-router-dom';

const Ashish = () => {
  return (
    <div className='conteam'>
      <div className='image-and-heading'>
        <img
          className='teamimage'
          src='/Picture7.jpg'
          alt='Your Image'
        />
        <h1 className='teamh1 centered-heading'>
        Ashish Garg, MBA (SCM), SAP S4, ECC, APO, IBP <br />
        O2C, P2P, Planning, Fulfilment, Forecasting, SME
        </h1>
      </div>
      <div className='teamcontainer'>
        <div className='left-column'>
          <h2 className='teamh2'>Functional Expertise</h2>
          <hr className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <ul className='expertise'>
            <li>SAP SCM/APO/GATP/DP/SNP/PP&DS/SCEM</li>
            <li>SAP SD/MM/PP</li>
            <li>SAP IBP DP/S&RP</li>
            <li>Systems Integration/CIF/ABAP/SQL</li>
            <li>Data Modelling/Analytic</li>
            <li>Business Process Re-engineering</li>
          </ul>
          <h2 className='teamh2'>Clients</h2>
          <hr  className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <div className='clients-flex'>
            <ul className='column'>
              <li>FMC</li>
              <li>ExxonMobil</li>
              <li>Apple</li>
              <li>Medtronic</li>
              <li>NVIDIA</li>
            </ul>
            <ul className='column'>
              <li>Hindustan Unilever</li>
              <li>Ranbaxy Labs</li>
              <li>Johnson & Johnson</li>
              <li>SanDisk</li>
              <li>Applied Materials</li>
            </ul>
          </div>
          <h2 className='teamh2'>Industry Expertise</h2>
          <hr className='teamhr'/>
          <ul className='industry'>
            <li>FMCG/ CPG</li>
            <li>Pharmaceuticals/ Medical Devices</li>
            <li>Petrochemicals/ Oil & Gas</li>
            <li>Agri Business</li>
            <li>Hi-Tech</li>
          </ul>
        </div>
        <div className='right-column'>
          <h2 className='teamh2'>Selected Relevant Experience</h2>
          <hr className='teamhr'/>
          <ul className='experience'>
            <li>
            Skilled in implementing, developing and supporting SAP Supply Chain solutions using Agile and ASAP methodology that contributed to top-line & bottom-line objectives and led to huge improvement in overall business results

            </li>
            <li>
            Responsible for the design, development and implementation of processes and systems that optimize Demand & Supply Planning and Inventory Management across Supply Chain, taking into consideration the trade-offs between carrying cost, operational cost, obsolescence cost, and service levels


            </li>
            <li>
            Responsible for ensuring the integrity of the Planning Master data elements and the overall generation, monitoring and analysis of key KPI metrics

            </li>
            <li>
            Drives key deliverables needed for system changes including documenting requirements, and contributing to the completion of solution designs and functional specifications

            </li>
            <li>
            Experience on various processes - Order to Cash, Procure to Pay, Vendor Selection, Promotion, Loyalty Program, Warehouse processes, Production Planning, Order fulfilment, Forecasting
 

            </li>
            <li>
            Delivered 5 implementation projects, 10 support projects and 2 enhancement projects 

            </li>
            <li>
            International experience – 3 years in USA, 3 years in Singapore, 1 year in Belgium, 1 year in Malaysia

            </li>
            <li>
            Development web-based application for SMEs using PHP, MySQL and Azure virtual machine

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Ashish