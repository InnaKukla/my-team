import React from "react";
import {
  HeroSection,
  HeroText,
  RightSection,
  HeroContainer,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroText>
          <h1>
            Find the <br />
            best <span>talent</span>
          </h1>
        </HeroText>
        <RightSection>
          <div className="line" />
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </RightSection>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
