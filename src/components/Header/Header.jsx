import React, { useEffect } from "react";
import {
  HeaderContainer,
  NavLinks,
  NavContainer,
  ContactsButton,
  NavLogo,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/myteam-logo.svg";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import { Link, NavLink } from "react-router";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
    <HeaderContainer>
      {isMobile ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto auto",
          }}
        >
          {" "}
          <NavLink to="/">
            <NavLogo src={Logo} alt="logo" />
          </NavLink>
          <SideBarHeader />
        </div>
      ) : (
        <>
          <NavContainer>
            <NavLink to="/">
              <NavLogo src={Logo} alt="logo" />
            </NavLink>
            <NavLinks>
              <li>
                <Link to="/">home</Link>
              </li>

              <li>
                <Link to="/about">about</Link>
              </li>
            </NavLinks>
          </NavContainer>
          <ContactsButton>
            <Link to="/contact">contact us</Link>
          </ContactsButton>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
