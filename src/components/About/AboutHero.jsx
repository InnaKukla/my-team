import React from "react";
import {
  AboutHeroContainer,
  AboutHeroSection,
  AboutHeroText,
  AboutRightSection,
} from "./About.styled";

const AboutHero = () => {
  return (
    <AboutHeroSection>
      <AboutHeroContainer>
        <AboutHeroText>About</AboutHeroText>
        <AboutRightSection>
          <div className="aboutLine" />
          {/* <HeroDecoration /> */}
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </AboutRightSection>
      </AboutHeroContainer>
    </AboutHeroSection>
  );
};

export default AboutHero;
