import styled from "styled-components";
import { NavContainer, NavLinks } from "../Header/Header.styled";

export const FooterSection = styled.section`
   padding: 65px 24px;
  background-color: #002529;

  @media screen and (min-width: 768px) {
    padding: 56px 39px;
  }

  @media screen and (min-width: 1280px) {
    padding: 48px 165px;
  }
`;

export const FooterSectionWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 32px;
 

  @media screen and (min-width: 768px) {
   display: block;
  }

  @media screen and (min-width: 1280px) {
   display: flex;
   justify-content: space-between;
   flex-direction: row;
  }
`;

export const FooterNavContainer = styled(NavContainer)`
 display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  @media screen and (min-width: 768px) {

    align-items: flex-start;
    /* margin-right: 60px; */
  }

  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
`;

export const FooterLogo = styled.img`
 width: 96px;
 height: 24px;
  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
    width: 160px;
    height: 40px;
  }
`;


export const FooterNavLinks = styled(NavLinks)`
 font-family: Livvic;
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    text-underline-position: from-font;


    color: #ffffff;
    display: flex;
    gap: 24px;
    margin: auto auto;
    li {
      :hover {
        color: #f67e7e;
      }
    }
  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
    /* height: 48px;
    margin-top: 20px; */
    margin: 0;
  }
`;

export const FooterCopyright = styled.p`
  font-family: 'Livvic';
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    opacity: 60%;

    color: #ffffff;

  @media screen and (min-width: 768px) {
   
  }

  @media screen and (min-width: 1280px) {
    margin-top: 51px;
  }
`;

export const FooterText = styled.p`
  font-family: 'Livvic';
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    opacity: 60%;

    color: #ffffff;

  @media screen and (min-width: 768px) {

    text-align: right;

  }

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const FooterContentSocialCopyrightWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    /* display: flex;
    align-items: flex-end;
    gap: 0; */
    display: block;
    margin: 0;
  }
`;

export const FooterContentWrapper = styled.div`
   display: flex;
   flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: 0
  }
`;

export const FooterSocialIconsWrapper = styled.div`
  display: flex;
   
    align-items: center;
    gap: 16px;
    
     && {
      :hover{
        fill: #F67E7E;
        cursor: pointer;
        /* background-color: black; */
      }
    }
  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1280px) {
justify-content: flex-end;
  }
`;

export const FooterSocialIcon = styled.img`
  /* display: flex;
  /* align-items: center;
  gap: 16px;  */
  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
    cursor: pointer;
    && {
       &:hover {
      fill: red;
    }
    }
    /* &:hover {
      color: red;
    } */
  }
`;
