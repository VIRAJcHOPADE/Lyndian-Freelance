import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.js";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const NavIcon = styled(NavLink)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-200%")};
  transition: 350ms;
  z-index: 10;
  overflow: scroll;
  overflow-x: hidden;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log("Hii");
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       document.getElementById("ham-menu").style.color = "#1e2e3e";
  //     } else {
  //       document.getElementById("ham-menu").style.color = "white";
  //     }
  //   });
  // }, []);

  return (
    <div id="burger-menu">
      <IconContext.Provider
        value={{
          color: "#1e2e3e",
        }}
      >
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars
              onClick={showSidebar}
              id="ham-menu"
              style={{ color: "#1e2e3e" }}
            />
          </NavIcon>
        </Nav>
        <SidebarNav
          sidebar={sidebar}
          style={{
            width: window.innerWidth <= 800 ? "100vw" : "24rem",
          }}
        >
          <SidebarWrap>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: " 2rem",
                backgroundColor: "white",
                position: "fixed",
                width: window.innerWidth <= 800 ? "100vw" : "24rem",
                // gap:
                //   window.innerWidth < 800
                //     ? window.innerWidth < 300
                //       ? "2rem"
                //       : "9rem"
                //     : "13rem",
              }}
            >
              <NavIcon to="/" onClick={showSidebar}>
                <img
                  src="logo.png"
                  style={{ width: "9rem", height: "3rem" }}
                  alt=""
                />
              </NavIcon>
              <AiIcons.AiOutlineClose
                onClick={showSidebar}
                style={{ fontWeight: 550 }}
              />
            </div>
            <div style={{ marginTop: "5rem" }}>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu item={item} key={index} showSideBar={showSidebar} />
                );
              })}
            </div>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
