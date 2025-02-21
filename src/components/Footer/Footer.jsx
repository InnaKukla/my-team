import React from "react";
import {
  FooterContentWrapper,
  FooterCopyright,
  FooterNavContainer,
  FooterNavLinks,
  FooterSection,
  FooterSocialIconsWrapper,
  FooterText,
  FooterSocialIcon,
  FooterSectionWrapper,
  FooterContentSocialCopyrightWrapper,
  FooterLogo,
} from "./Footer.styled";
import { SectionContainer } from "../Home/Home.styled";
import { Link } from "react-router";
import Logo from "../../assets/myteam-logo.svg";
import { ReactComponent as Pinterest } from "../../assets/pinterest.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <FooterSection>
      <SectionContainer>
        <FooterSectionWrapper>
          <FooterContentWrapper>
            <FooterNavContainer>
              <FooterLogo src={Logo} alt="logo" />
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
              <Facebook />
              <Pinterest />
              <Twitter />
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
