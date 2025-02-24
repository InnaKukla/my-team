import styled from "styled-components";

export const PreFooterSection = styled.section`
  padding: 83px 24px;
  will-change: background-image;
  background-image: url("${process.env.PUBLIC_URL}/bg-image-home-phone-prefooter.jpg");
  background-size: cover;
  background-position: bottom;

  @media screen and (min-width: 768px) {
    padding: 76px 97px;

    background-image: url("${process.env.PUBLIC_URL}/bg-image-home-prefooter.jpg?v=2");
  }

  @media screen and (min-width: 1280px) {
    padding: 84px 165px;
    background-image: url("${process.env.PUBLIC_URL}/pre-footer.jpg?v=2");
  }
`;

export const PreFooterTitle = styled.h2`
  font-family: "Livvic";
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: #012f34;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    text-align: left;
  }
`;

export const PreFooterButton = styled.button`
  padding: 9px 32px;
  cursor: pointer;
  border-radius: 24px;
  font-family: "Livvic";
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: #012f34;
  border: 2px solid #012f34;
  background: #f87e7d;
  border-radius: 24px;

  &:hover {
    background-color: #012f34;
    color: #fff;
    border: 2px solid #012f34;
  }
  cursor: pointer;
  border-radius: 24px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const PreFooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
  }
`;
