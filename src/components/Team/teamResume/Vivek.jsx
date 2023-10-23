import React from 'react';
import './Loknath.css';
import { Link } from 'react-router-dom';

const Vivek = () => {
  return (
    <div className='conteam'>
      <div className='image-and-heading'>
        <img
          className='teamimage'
          src='/Picture6.png'
          alt='Your Image'
        />
        <h1 className='teamh1 centered-heading'>
        Vivek Viswanathan, SAP Certified <br />
        SAP BW, BW4HANA, BEX, Native HANA, SAP DI, ABAP, VBA Consultant
        </h1>
      </div>
      <div className='teamcontainer'>
        <div className='left-column'>
          <h2 className='teamh2'>Functional Expertise</h2>
          <hr className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <ul className='expertise'>
            <li>Expertise in SAP BW, BW4HANA, BEX,</li>
            <li>Native HANA Developer</li>
            <li>Worked extensively in SAP Data Intelligence</li>
            <li>Strong Handson experience in ABAP</li>
            <li>Expert in VBA by writing macros in AO Workbook</li>
          </ul>
          <h2 className='teamh2'>Clients</h2>
          <hr className='teamhr'/> {/* Add the <hr> tag after <h2> */}
          <div className='clients-flex'>
            <ul className='column'>
              <li>Friesland</li>
              <li>Campina</li>
              <li>Petronas</li>
              <li>OLAM</li>
              <li>ATB</li>
            </ul>
            <ul className='column'>
              <li>SAP India</li>
              <li>Reliance</li>
            </ul>
          </div>
          <h2 className='teamh2'>Industry Expertise</h2>
          <hr className='teamhr'/>
          <ul className='industry'>
            <li>Sales</li>
            <li>Finance</li>
            <li>COPA</li>
            <li>Purchase and Inventory</li>
            <li>Planning Applications</li>
          </ul>
        </div>
        <div className='right-column'>
          <h2 className='teamh2'>Selected Relevant Experience</h2>
          <hr className='teamhr'/>
          <ul className='experience'>
            <li>
            Worked for European client by extracting source data via standard SAP extraction and place the extracted files into 3rd Party cloud file location. Technology used for this task is Data Intelligence and managed ODP framework for delta mechanism.

            </li>
            <li>
            One of the Malaysian client required to automat the taxation sheet which contains more than 60 worksheets in the excel. Referring SAP data for report content – standardize the tax sheet format and automat to access the report on a regular intervals (weekly, monthly, quarterly and annual). Developed the application in SAP Analysis for Office integrated with VBA.


            </li>
            <li>
            Developed a dashboard by referring various SAP source data and integrated into one location to consume the information by various drill down. Dashboard developed in SAC and various SAP source data such as US, African, India and Australia integrated together and stored in the headquarters 
            server by providing one consolidated report with region and product break down. Extracted information from various SAP servers into centralized SAP BW4HANA and HANA tables. Reporting on by BW4HANA and HANA Calculation views by enabling the mixed scenarios. Planning information as well pulled 
            from the respective regions and projected against actual numbers.

            </li>
            <li>
            Worked for one of the leading North American banking company and developed various finance reports to supply information across various departments. Reports developed in WebI and AO by referring SAP BW.

            </li>
            <li>
            Developed various decision support reports for leading India based telecom company and led the development team for various report developments.

            </li>
            <li>
            Worked for VB / SQL based company to develop ERP for textile companies. Implemented the tool into various organizations and rolled out end to end processes.

            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Vivek