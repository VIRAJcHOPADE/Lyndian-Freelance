import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Sidebar from "./Sidebar/SideBar";

const NavBar = () => {
  const upperHalfOptions = [
    { title: "Contact Us", link: "contact-us" },
    { title: "Location", link: "location" },
    { title: "Careers", link: "/careers" },
    { title: <i className="fa-brands fa-linkedin"></i>, link: "#" },
    { title: <i className="fa fa-search" aria-hidden="true"></i>, link: "#" },

    "LinkedIn",
  ];
  const lowerHalfOptions = [
    {
      title: "Products",
      subTopics: [
        {
          title: "Intelligent Supply Chain Extensions",
          link: "/intelligent-supply-chain-extensions",
        },
        {
          title: "Automatic Forecasting and Replenishment",
          link: "/automatic-forecasting-and-replenishment",
        },
        {
          title: "Boosters and Accelerators",
          link: "/boosters-and-accelerators",
        },
        {
          title: "Portals",
          link: "/portals",
        },
      ],
      isSub: true,
    },
    {
      title: "Services",
      subTopics: [
        {
          title: "Supply Chain Solutions Audit",
          link: "/supply-chain-solution-audit",
        },
        {
          title: "Forecasting as a Service",
          link: "/forecasting-as-a-service",
        },
        {
          title: "Optimizer Tuning",
          link: "/optimizer-tuning",
        },
        {
          title: "Forecast Model Tuning",
          link: "/forecast-model-tuning",
        },
        {
          title: "Data Engineering",
          link: "/data-engineering",
        },
        {
          title: "Implementation (SCP&M)",
          link: "/implementation",
        },
        {
          title: "SAP APO Be-Spoke Support",
          link: "/sap-apo-be-spoke-support",
        },
        {
          title: "Machine Learning Integration",
          link: "/machine-learning-integration",
        },
        {
          title: "Migrations and Upgrades",
          link: "/migrations-and-upgrades",
        },
        {
          title: "Machine Learning Integration",
          link: "/machine-learning-integration",
        },
        {
          title: "Hosting",
          link: "/hosting",
        },
        {
          title: "Be-Spoke Support (SAP Legacy)",
          link: "/be-spoke-support",
        },
        {
          title: "Systems Integration",
          link: "/system-integration",
        },
        {
          title: "Sizing and Tuning Databases",
          link: "/sizing-and-tuning-databases",
        },
        {
          title: "GDPR and CCPA Compliance Audit",
          link: "/gdpr-and-ccpa-compliance-audit",
        },
        {
          title: "Web Applications",
          link: "/web-applications",
        },
        {
          title: "Project Reports",
          link: "/project-reports",
        },
        {
          title: "Software Evalution",
          link: "/software-evaluation",
        },
        {
          title: "Mobile Applications ",
          link: "/mobile-applications",
        },
      ],
      isSub: true,
    },
    {
      title: "Industries",
      subTopics: [
        {
          title: "Agri business",
          link: "/agri-business",
        },
        {
          title: "Diary",
          link: "/diary",
        },
        {
          title: "FMCG & CPG",
          link: "/fmcg-cpg",
        },
        {
          title: "Retail",
          link: "/retail",
        },
        {
          title: "MRO & Spares(After Market)",
          link: "/mro-and-spares",
        },
        {
          title: "Pharmaceuticals",
          link: "/pharmaceuticals",
        },
      ],
      isSub: true,
    },
    {
      title: "Technologies",
      subTopics: [
        {
          title: "SAP SCM",
          link: "/sap-scm",
        },
        {
          title: "SAP S4HANA",
          link: "/sap-s4hana",
        },
        {
          title: "SAP BW on HANA",
          link: "/sap-bw-on-hana",
        },
        {
          title: "SAP SAC",
          link: "/sap-sac",
        },
        {
          title: "SAP IBP",
          link: "/sap-ibp",
        },
        {
          title: "SAP BTP",
          link: "/sap-btp",
        },
        {
          title: "RPA - Automation Anywhere",
          link: "/rpa-automation-anywhere",
        },
        {
          title: "HANA DB",
          link: "/hana-db",
        },
        {
          title: "BODS",
          link: "/bods",
        },
        {
          title: "ODATA",
          link: "/odata",
        },
        {
          title: "Native HANA",
          link: "/native-hana",
        },
        {
          title: "ABAP on HANA",
          link: "/abap-on-hana",
        },
        {
          title: "Mendix",
          link: "/mendix",
        },
        {
          title: "SAP TMS",
          link: "/sap-tms",
        },
        {
          title: "BY TMS",
          link: "/by-tms",
        },
      ],
      isSub: true,
    },
    {
      title: "Partners",
      subTopics: [
        {
          title: "Logility",
          link: "/logility",
        },
        {
          title: "Arkieva",
          link: "/arkieva",
        },
        {
          title: "Novobi",
          link: "/novobi",
        },
        {
          title: "Kinaxis",
          link: "/kinaxis",
        },
      ],
      isSub: true,
    },
    {
      title: "Blogs",
      link: "/blogs",
      isSub: false,
    },
    {
      title: "People",
      link: "/people",
      isSub: false,
    },
    {
      title: "Project Trainings",
      link: "/project-trainings",
      isSub: false,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.getElementById("upper-nav").style.display = "none";
        document.getElementById("lower-nav").style.backgroundColor = "white";
        var link2 = document.querySelectorAll(
          "#lower-nav #inner-lower-nav #left-inner-lower-nav .hover-nav-comp"
        );

        var links = document.querySelectorAll(
          "#lower-nav #inner-lower-nav #left-inner-lower-nav a"
        );

        for (var ele of links) {
          ele.classList.add("black-color");
        }
        for (var ele of link2) {
          ele.classList.add("black-color");
        }
      } else {
        if (window.innerWidth >= 1000) {
          document.getElementById("upper-nav").style.display = "flex";
        }
        document.getElementById("lower-nav").style.backgroundColor =
          "transparent";
        var link2 = document.querySelectorAll(
          "#lower-nav #inner-lower-nav #left-inner-lower-nav .hover-nav-comp"
        );
        var links = document.querySelectorAll(
          "#lower-nav #inner-lower-nav #left-inner-lower-nav a"
        );

        for (var ele of links) {
          ele.classList.remove("black-color");
        }
        for (var ele of link2) {
          ele.classList.remove("black-color");
        }
      }
    });
  }, []);

  return (
    <div id="navbar-main-cont">
      <div id="upper-nav">
        <div id="inner-upper-nav">
          {upperHalfOptions.map((item, key) => (
            <NavLink to={item.link} key={key}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div id="lower-nav">
        <div id="inner-lower-nav">
          <img
            src="logo.png"
            alt=""
            onClick={() => {
              window.location = "/";
            }}
          />
          <Sidebar />
          <div id="left-inner-lower-nav">
            {lowerHalfOptions.map((item, key) => (
              <>
                {item.isSub === false ? (
                  <NavLink to={item.link} key={key}>
                    {item.title}
                    <div className="bottom-bar"></div>
                  </NavLink>
                ) : (
                  <>
                    <div
                      className="hover-nav-comp"
                      id={`hover-nav-comp${key}`}
                      key={key}
                      value={key}
                      onMouseEnter={() => {
                        document.getElementById(
                          `hover-component-${key}`
                        ).style.display =
                          lowerHalfOptions[key].subTopics.length > 10
                            ? "grid"
                            : "grid";

                        document.getElementById(
                          `hover-component-${key}`
                        ).style.gridTemplateColumns =
                          lowerHalfOptions[key].subTopics.length > 10
                            ? "50% 50%"
                            : "";
                      }}
                      onMouseLeave={() => {
                        document.getElementById(
                          `hover-component-${key}`
                        ).style.display = "none";
                      }}
                    >
                      <p>{item.title}</p>
                      <div className="bottom-bar"></div>
                      <div
                        id={`hover-component-${key}`}
                        className="hover-component"
                      >
                        {lowerHalfOptions[key].subTopics.map((ele) => (
                          <NavLink
                            to={ele.link}
                            className="inner-link"
                            style={{
                              color: "#374858",
                            }}
                          >
                            {ele.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
