import {
  HomeSuccessStoriesSectionName,
  HomeSuccessStoriesSectionPosition,
  HomeSuccessStoriesSectionText,
  SectionContainer,
} from "../Home/Home.styled";
import {
  AboutDirectorsIconPlus,
  AboutDirectorsIconsWrapper,
  AboutDirectorsItem,
  AboutDirectorsList,
  AboutDirectorsMainText,
  AboutDirectorsTextWrapper,
  AboutDirectorsWrapper,
} from "./About.styled";
import DirectorFirst from "../../assets/directors-1.png";
import DirectorSecond from "../../assets/directors-2.png";
import DirectorThird from "../../assets/directors-3.png";
import DirectorFour from "../../assets/directors-4.png";
import DirectorFive from "../../assets/directors-5.png";
import DirectorSix from "../../assets/directors-6.png";
// import Plus from "../../assets/plus.png";
// import Cancel from "../../assets/cancel.png";
import { ReactComponent as TwitterIcon } from "../../assets/twitter-svg.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin-logo.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Cancel } from "../../assets/cancel.svg";
import { useState } from "react";

const AboutDirectorsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const directors = [
    {
      avatar: DirectorFirst,
      name: "Nikita Marks",
      position: "Founder & CEO",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      avatar: DirectorSecond,
      name: "Cristian Duncan",
      position: "Co-founder & COO",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      avatar: DirectorThird,
      name: "Cruz Hamer",
      position: "Co-founder & CTO",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      avatar: DirectorFour,
      name: "Drake Heaton",
      position: "Co-founder & CTO",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      avatar: DirectorFive,
      name: "Griffin Wise",
      position: "Lead Marketing",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
    {
      avatar: DirectorSix,
      name: "Aden Allan",
      position: "Head of Talent",
      additionalContent:
        "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
  ];

  return (
    <AboutDirectorsWrapper>
      <SectionContainer>
        <AboutDirectorsMainText>Meet the directors</AboutDirectorsMainText>
        <AboutDirectorsList>
          {directors.map((item, index) => (
            <AboutDirectorsItem key={item.name}>
              {/* <div>
                <img
                  src={item.avatar}
                  width={62}
                  height={62}
                  alt="avatarFirst"
                  style={{
                    border: "2px solid #C4FFFE",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <HomeSuccessStoriesSectionName>
                  {item.name}
                </HomeSuccessStoriesSectionName>
                <HomeSuccessStoriesSectionPosition>
                  {" "}
                  {item.position}
                </HomeSuccessStoriesSectionPosition>
              </div> */}
              {activeIndex === index ? (
                <>
                  <AboutDirectorsTextWrapper>
                    <HomeSuccessStoriesSectionName>
                      {item.name}
                    </HomeSuccessStoriesSectionName>
                    <HomeSuccessStoriesSectionText>
                      {item.additionalContent}
                    </HomeSuccessStoriesSectionText>
                  </AboutDirectorsTextWrapper>
                  <AboutDirectorsIconsWrapper>
                    <TwitterIcon />
                    <LinkedinIcon />
                  </AboutDirectorsIconsWrapper>
                  <AboutDirectorsIconPlus isactive={activeIndex === index}>
                    <Cancel
                      onClick={() => handleToggle(index)}
                    />
                  </AboutDirectorsIconPlus>
                </>
              ) : (
                <>
                  <div>
                    <img
                      src={item.avatar}
                      width={62}
                      height={62}
                      alt="avatarFirst"
                      style={{
                        border: "2px solid #C4FFFE",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "24px" }}>
                    <HomeSuccessStoriesSectionName>
                      {item.name}
                    </HomeSuccessStoriesSectionName>
                    <HomeSuccessStoriesSectionPosition>
                      {" "}
                      {item.position}
                    </HomeSuccessStoriesSectionPosition>
                  </div>
                  <AboutDirectorsIconPlus isactive={activeIndex === index ? true : false}>
                    <Plus onClick={() => handleToggle(index)} />
                  </AboutDirectorsIconPlus>
                </>
              )}

              {/* <AboutDirectorsIconPlus src={Plus} alt="plus icon" /> */}
            </AboutDirectorsItem>
          ))}
        </AboutDirectorsList>
      </SectionContainer>
    </AboutDirectorsWrapper>
  );
};

export default AboutDirectorsSection;
