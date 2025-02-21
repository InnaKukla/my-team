import styled from "styled-components";

export const HeroSection = styled.section`
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 112px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 129px;
  }
`;

export const HeroContainer = styled.div`
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
  }
`;

export const HeroText = styled.div`
  flex: 1;
  h1 {
    font-family: "Livvic";
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ffffff;
    
    span {
      color: #f67e7e;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 64px;
      line-height: 56px;
    }
  }

  @media screen and (min-width: 1280px) {
   
    h1 {
      text-align: left;
    font-size: 100px;
    font-weight: 700;
    line-height: 100px;
      text-align: left;
    }
  }
`;

export const RightSection = styled.div`
  flex: 1;
  max-width: 327px;
  display: flex;
  align-items: center;
  .line {
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
    max-width: 457px;
  }

  @media screen and (min-width: 1280px) {
    flex: 1;

    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .line {
      visibility: visible;
      width: 50px;
      height: 4px;
      background: #79c8c7;
      position: absolute;
      left: 0;
      top: 0;
    }
    p {
      font-size: 18px;
      text-align: left;
      margin-top: 80px;
    }
  }
`;
