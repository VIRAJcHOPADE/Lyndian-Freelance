import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const elements = [
    {
      title: "Solutions",
      subLinks: [
        { title: "Applications", link: "/applications" },
        { title: "Platform", link: " /platform" },
        { title: "industries", link: " /industries" },
      ],
    },
    {
      title: "Resources",
      subLinks: [
        { title: "Resource Center", link: "/resource-center" },
        { title: "Blog", link: " /blog" },
        { title: "Our Customers", link: " /our-customers" },
      ],
    },
    {
      title: "About Us",
      subLinks: [
        { title: "Contact", link: "/contact-us" },
        { title: "Newsroom", link: " /newsroom" },
        { title: "Events", link: " /events" },
        { title: "Careers", link: " /careers" },
        { title: "Partners", link: " /partners" },
        { title: "Investor Relations", link: " /investor-relations" },
      ],
    },
  ];
  const otherLinks = [
    {
      title: "Sitemap",
      link: "/sitemap",
    },
    {
      title: "Term of Use",
      link: "/term-of-use",
    },
    {
      title: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      title: "Security",
      link: "/security",
    },
    {
      title: "Accessibility",
      link: "/accessibility",
    },
  ];
  return (
    <div id="main-footer-div">
      <div id="upper-footer">
        <div id="footer-logo">
          <img src="logo.png" alt="" />
          <div id="socials-logo">
            <NavLink to="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-twitter"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-facebook-f"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-youtube"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-instagram"></i>
            </NavLink>
          </div>
        </div>
        <div id="footer-nav">
          {elements.map((ele, key) => (
            <div key={key} className="footer-nav-inner">
              <h3>{ele.title}</h3>
              {ele.subLinks.map((it, key) => (
                <NavLink key={key} to={it.link}>
                  {it.title}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        <div id="footer-newsletter">
          <button>GET THE NEWSLETTER</button>
        </div>
      </div>
      <div id="lower-footer">
        <div id="copy-right">&copy; Lydian Inc. 2023. All Rights Reserved</div>
        <div id="other-sections">
          {otherLinks.map((ele, key) => (
            <>
              <NavLink to={ele.link} key={key}>
                {ele.title}
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
