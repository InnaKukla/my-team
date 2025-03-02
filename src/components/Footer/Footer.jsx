import React from "react";
import {
  FooterContentWrapper,
  FooterCopyright,
  FooterNavContainer,
  FooterNavLinks,
  FooterSection,
  FooterSocialIconsWrapper,
  FooterText,
  FooterSectionWrapper,
  FooterContentSocialCopyrightWrapper,
  FooterLogo,
} from "./Footer.styled";
import { SectionContainer } from "../Home/Home.styled";
import { Link, useLocation } from "react-router";
import Logo from "../../assets/myteam-logo.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import ScrollToTop from "../../shared/scrollToTop";

const Footer = () => {
  const { pathname } = useLocation();
  const scroll = () => {
    if (pathname === "/") {
      window.scrollTo(0, 0);
    } else {
      <ScrollToTop />;
    }
  };
  return (
    <FooterSection>
      <SectionContainer>
        <FooterSectionWrapper>
          <FooterContentWrapper>
            <FooterNavContainer>
              <Link to="/">
                <FooterLogo src={Logo} alt="logo" onClick={scroll} />
              </Link>
              <FooterNavLinks>
                <li>
                  <Link to="/">home</Link>
                </li>

                <li>
                  <Link to="/about">about</Link>
                </li>
              </FooterNavLinks>
            </FooterNavContainer>
            <FooterText>
              987 Hillcrest Lane
              <br />
              Irvine, CA
              <br />
              California 92714
              <br />
              Call Us : 949-833-7432
            </FooterText>
          </FooterContentWrapper>

          <FooterContentSocialCopyrightWrapper>
            <FooterSocialIconsWrapper>
              <Link to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Duk_UA">
                <Facebook />
              </Link>
              <Link to="https://www.pinterest.com/">
                <Pinterest />
              </Link>
              <Link to="https://x.com/?lang=uk">
                <Twitter />
              </Link>
            </FooterSocialIconsWrapper>

            <FooterCopyright>
              Copyright 2020. All Rights Reserved
            </FooterCopyright>
          </FooterContentSocialCopyrightWrapper>
        </FooterSectionWrapper>
      </SectionContainer>
    </FooterSection>
  );
};

export default Footer;
