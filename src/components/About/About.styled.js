import styled from "styled-components";

export const AboutHeroSection = styled.section`
  /* padding: 140px 165px; */
  @media screen and (min-width: 768px) {
    padding: 112px 110px 0 110px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const AboutDirectorsWrapper = styled.section`
  padding: 88px 24px 116px 24px;
  background-image: url("about-directors-phone.jpg");
  background-size: cover;
  @media screen and (min-width: 768px) {
    background-image: url("about-directors-tablet.jpg");
    background-size: cover;
    background-position: top;
  }

  @media screen and (min-width: 1280px) {
    padding: 140px 165px 168px 165px;
    background-image: url("about-directors.jpg");
    background-size: cover;
    background-position: bottom;
  }
`;

export const AboutDirectorsIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  justify-content: center;
  && {
    :hover {
      fill: #f67e7e;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {

  }
`;

export const AboutDirectorsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const AboutClientsWrapper = styled.section`
  padding: 88px 24px;
  background-image: url("about-clients-phone.jpg");
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 88px 39px;
    background-image: url("about-clients-tablet.jpg");
    background-size: cover;
  }

  @media screen and (min-width: 1280px) {
    padding: 140px 165px 140px 165px;
    background-image: url("about-clients.jpg");
    background-size: cover;
  }
`;
export const AboutHeroContainer = styled.div`
  max-width: 327px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: relative;
  gap: 18px;
  @media screen and (min-width: 768px) {
    max-width: 689px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    position: relative;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    flex-direction: row;
    align-items: baseline;
    padding: 0;
    margin-top: 120px;
  }
`;

export const AboutWrap = styled.div`
  padding: 48px 24px 108px 24px;
  will-change: background-image;
  background-image: url("about-header-phone.jpg");
  background-size: cover;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    padding: 64px 39px 108px 39px;
    background-image: url("about-header-tablet.jpg");
    background-size: cover;
    background-position: right;
  }

  @media screen and (min-width: 1280px) {
    padding: 73px 165px 120px 165px;

    background-image: url("bg-about-1.jpg");
    background-size: cover;
    background-position: right;
  }
`;

export const AboutHeroText = styled.h2`
  font-family: "Livvic";
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) {
    h1 {
      font-size: 64px;
      font-weight: 700;
      line-height: 100px;
    }
    span {
      color: #ffffff;
    }
  }
`;

export const AboutRightSection = styled.div`
  .aboutLine {
    visibility: hidden;
  }
  p {
    font-family: "Livvic";
    font-size: 15px;
    font-weight: 600;
    line-height: 28px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
    max-width: 730px;
    /* position: relative; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .aboutLine {
      visibility: visible;
      width: 50px;
      height: 4px;
      background: #f67e7e;
      position: absolute;
      left: 0;
      top: 0;
    }
    p {
      font-size: 18px;
      line-height: 28px;
      text-align: left;
      margin-top: 40px;
    }
  }
`;

export const AboutDirectorsMainText = styled.h2`
  font-family: Livvic;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
    font-family: Livvic;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const AboutDirectorsList = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 52px;
  align-items: center;
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    gap: 70px 10px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* max-width: 582px; */
    margin: auto auto;
    margin-top: 48px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 24px;
    margin-top: 64px;
    max-width: none;
  }
`;

export const AboutDirectorsItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 327px;
  background-color: #012f34;
  /* margin-top: 48px; */
  padding: 32px 24px 56px 24px;
  justify-content: center;
  width: 327px;
  @media screen and (min-width: 768px) {
    width: 281px;
  }

  @media screen and (min-width: 1280px) {
    width: 350px;
    /* margin-top: 64px; */
  }
`;

export const AboutDirectorsIconPlus = styled.div`
  position: absolute;
  top: 211px;
  overflow: hidden;
  cursor: pointer;
  :hover {
    fill: ${(props) => (props.isactive ? `#F67E7E` : `#79C8C7`)};
    path {
      fill: black;
    }
  }

  @media screen and (min-width: 768px) {
    /* height: 44px; */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const AboutClientsMainText = styled.h2`
  font-family: Livvic;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;

    line-height: 48px;

    margin-bottom: 64px;
  }
`;

export const AboutClientsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
