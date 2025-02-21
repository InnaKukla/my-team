import React from "react";
import {
  HeroSection,
  HeroText,
  RightSection,
  HeroContainer
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
         <HeroText>
        <h1>
          Find the <br/>best <span>talent</span>
        </h1>
      </HeroText>
      <RightSection>
        <div className="line"/>
         {/* <HeroDecoration /> */}
        <p>
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
      </RightSection>
     </HeroContainer>
     
    </HeroSection>
  );
  // return (
  //   <HeroWrap>
  //     <HeroMainText>
  //       Find the best <span>talent</span>
  //     </HeroMainText>
  //     <div >
  //       <HeroTextLine />
  //       <HeroText>
  //         Finding the right people and building high performing teams can be
  //         hard. Most companies aren’t tapping into the abundance of global
  //         talent. We’re about to change that.
  //       </HeroText>
  //     </div>
  //   </HeroWrap>
  // );
};

export default Hero;
