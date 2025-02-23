import { Box, TextField } from "@mui/material";
import styled from "styled-components";


export const ContactsWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 62px;
    align-items: end;
  }
`;


export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 999;
`;

export const ContactsHeroWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
    justify-content: space-between;
    padding: 0;
    width: 100%;
  }
`;

export const ContactsWrap = styled.div`
  padding: 48px 24px 112px 24px;
  background-image: url("${process.env.PUBLIC_URL}/contacts-phone.jpg");
  background-size: cover;
  background-position: bottom;
  opacity: 0; /* Початково приховуємо */
  transition: opacity 0.5s ease-in-out; 
  /* Плавне з’явлення */

  @media screen and (min-width: 768px) {
    padding: 48px 39px 112px 39px;
    background-image: url("${process.env.PUBLIC_URL}/contacts-tablet.jpg");
  }

  @media screen and (min-width: 1280px) {
    padding: 73px 165px 88px 165px;
    background-image: url("${process.env.PUBLIC_URL}/contacts-desktop.jpg?v=2");
  }
`;

export const ContactsHeroSection = styled.section`
  margin: auto auto;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin: auto auto;
    margin-top: 80px;
  }
`;

export const ContactsTitle = styled.h2`
  font-family: Livvic;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
    margin-bottom: 16px;
    line-height: 100px;
  }
`;

export const ContactsText = styled.p`
  font-family: Livvic;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: #f67e7e;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const ContactsDescriptionList = styled.div`
  margin-top: 40px;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 32px;
    margin-bottom: 0;
  }
`;

export const ContactsDescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const ContactsDescriptionText = styled.p`
  font-family: Livvic;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactsFormWrapper = styled.div`
  max-width: 327px;
  margin: auto auto;

  @media screen and (min-width: 768px) {
    /* max-width: 689px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactsFormBox = styled(Box)`
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 0 74px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    :not(:last-child) {
      align-items: center;
    }
    .inputMessage {
      padding-top: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;
export const ContactsFormInput = styled(TextField)`
  font-family: Livvic;
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: -0.11538461595773697px;
  text-align: left;

  .MuiInput-root::before {
    border-bottom: 1px solid
      ${(props) =>
        props.$isvalid === null
          ? "#FFFFFF"
          : props.$isvalid
          ? "#79C8C7"
          : "#F67E7E"};
  }

  .MuiInput-root::after {
    border-bottom: 1px solid
      ${(props) =>
        props.$isvalid === null
          ? "#FFFFFF"
          : props.$isvalid
          ? "#79C8C7"
          : "#F67E7E"};
  }

  .MuiInputBase-root {
    color: #fff;
    padding-top: 20px;

    :not(:last-child) {
      padding-top: 0;
    }
  }

  .MuiInputLabel-root {
    font-family: Livvic;
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: -0.12px;
    color: #fff;
    opacity: 60%;
    margin-left: 17px;
  }

  .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before {
    border-bottom: 1px solid
      ${(props) =>
        props.$isvalid === null
          ? "#FFFFFF"
          : props.$isvalid
          ? "#79C8C7"
          : "#F67E7E"};
  }

  .MuiFormHelperText-root.Mui-error {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContactsFormButton = styled.button`
  font-family: Livvic;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  /* text-align: left; */
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #004047;
  border-radius: 24px;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  padding: 9px 32px;
  width: 123px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
