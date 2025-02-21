import styled from "styled-components";
import { ReactComponent as Decor } from "../../assets/decor.svg";

export const HomeWrap = styled.div`
  padding: 48px 24px 197px 24px;
  will-change: background-image;
  background-image: url("bg-image-home-phone-1.jpg");
  background-size: cover;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    padding: 64px 45px 256px 45px;
    background-image: url("bg-image-home-tablet-1.jpg");
  }

  @media screen and (min-width: 1280px) {
    padding: 73px 165px 250px 165px;
    background-image: url("bg2-header.jpg");
  }
`;

export const HomeSection = styled.section`
  padding: 64px 24px;
  will-change: background-image;
  background-image: url("bg-image-home-phone-2.jpg");
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 100px 97px;
    background-image: url("bg-image-home-tablet-2.jpg");
    background-size: cover;
    background-position: bottom;
  }

  @media screen and (min-width: 1280px) {
    padding: 140px 165px;
    background-image: url("bg2-first-section.jpg");
  }
`;

export const HomeSuccessStoriesSectionWrap = styled(HomeSection)`
  padding: 140px 24px 173px 24px;
  will-change: background-image;
  background-image: url("bg-image-home-phone-3.jpg");

  @media screen and (min-width: 768px) {
    padding: 100px 97px;
    background-image: url("bg-image-home-tablet-3.jpg");
    background-size: cover;
    background-position: bottom;
  }

  @media screen and (min-width: 1280px) {
    padding: 124px 165px;

    background-image: url("bg2-second-section.jpg");
  }
`;

export const SectionContainer = styled.div`
  max-width: 327px;
  margin: auto auto;

  @media screen and (min-width: 768px) {
    margin: auto auto;
    max-width: 689px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1112px;
  }
`;

export const HomeFirstSectionMainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const HomeFirstSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* align-items: center; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HomePageLine = styled.div`
  width: 50px;
  height: 4px;
  background-color: #f67e7e;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 4px;
    background-color: #f67e7e;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomeFirstSectionTitle = styled.h3`
  width: 240px;
  font-family: Livvic;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    width: 445px;

    margin-top: 44px;
  }

  @media screen and (min-width: 1280px) {
    width: 445px;
    font-size: 48px;
    line-height: 48px;
    margin-top: 44px;
  }
`;

export const HomeFirstSectionGroupTitle = styled.p`
  font-family: Livvic;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  text-underline-position: "from-font";
  text-decoration-skip-ink: none;
  color: #f67e7e;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-family: Livvic;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: left;
    text-underline-position: "from-font";
    text-decoration-skip-ink: none;
    color: #f67e7e;
    margin-bottom: 16px;
    /* margin-bottom: 16px;
    &:not(:last-child) {
      margin-bottom: 16px;
    } */
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomeFirstSectionGroupText = styled.p`
  font-family: Livvic;
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  opacity: 80%;

  @media screen and (min-width: 768px) {
    font-family: Livvic;
    font-size: 15px;
    font-weight: 600;
    line-height: 25px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #ffffff;
    opacity: 80%;
    /* &:not(:last-child) {
      margin-left: 30px;
    } */
  }

  @media screen and (min-width: 1280px) {
    /* &:not(:last-child) {
      margin-left: 30px;
    } */
  }
`;

export const HomeFirstSectionListWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomeFirstSectionGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 23px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 540px;
  }
`;

export const HomeSuccessStoriesSectionList = styled.div`
  font-family: "Livvic";
  display: flex;
  position: relative;
  gap: 60px;
  margin-top: 80px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    font-family: "Livvic";
    display: flex;
    position: relative;
    gap: 60px;
    margin-top: 112px;
    flex-direction: column;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const HomeSuccessStoriesSectionTitle = styled.h2`
  font-family: Livvic;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  text-underline-position: "from-font";
  text-decoration-skip-ink: none;
  color: #ffffff;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const HomeSuccessStoriesSectionText = styled.p`
  font-family: Livvic;
  text-align: center;
  text-underline-position: "from-font";
  text-decoration-skip-ink: none;
  color: #ffffff;
  z-index: 1;
  position: relative;
  font-size: 15px;
  font-weight: 600;
  line-height: 25px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const HomeSuccessStoriesSectionName = styled.p`
  font-family: Livvic;
  text-align: center;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;

  color: #79c8c7;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomeSuccessStoriesSectionPosition = styled.p`
  font-family: Livvic;
  font-weight: 500;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
  font-style: italic;
  font-size: 13px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const HomeSuccessStoriesDecorIcon = styled(Decor)`
  position: absolute;
  top: -15%;
  left: 40%;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -19%;
    left: 44%;
  }

  @media screen and (min-width: 1280px) {
    top: -15%;
    left: 39%;
  }
`;
