import React from "react";
import {
  HomeFirstSectionGroupText,
  HomeFirstSectionGroupTitle,
  HomeFirstSectionGroupWrap,
  HomeFirstSectionTitle,
  HomePageLine,
  HomeSection,
  SectionContainer,
  HomeFirstSectionWrapper,
  HomeFirstSectionMainTextWrapper,
  HomeFirstSectionListWrap,
} from "./Home.styled";

import { ReactComponent as BuildTeamFirst } from "../../assets/manIcon.svg";
import { ReactComponent as BuildTeamSecond } from "../../assets/settingIcon.svg";
import { ReactComponent as BuildTeamThird } from "../../assets/diagramIcon.svg";

const HomeBuildTeamsSection = () => {
  return (
    <>
    <HomeSection>
        <SectionContainer>
          <HomeFirstSectionWrapper>
            <HomeFirstSectionMainTextWrapper
            >
              <HomePageLine />
              <HomeFirstSectionTitle>
                Build & manage distributed teams like no one else.
              </HomeFirstSectionTitle>
            </HomeFirstSectionMainTextWrapper>

            <HomeFirstSectionListWrap style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
              <HomeFirstSectionGroupWrap>
                <div>
                  <BuildTeamFirst />
                </div>
                <div style={{ marginLeft: "23px" }}>
                  <HomeFirstSectionGroupTitle>
                    Experienced Individuals
                  </HomeFirstSectionGroupTitle>
                  <HomeFirstSectionGroupText>
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </HomeFirstSectionGroupText>
                </div>
              </HomeFirstSectionGroupWrap>

              <HomeFirstSectionGroupWrap>
                <div>
                  <BuildTeamSecond />
                </div>
                <div style={{ marginLeft: "23px" }}>
                  <HomeFirstSectionGroupTitle>
                    Easy to Implement
                  </HomeFirstSectionGroupTitle>
                  <HomeFirstSectionGroupText>
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </HomeFirstSectionGroupText>
                </div>
              </HomeFirstSectionGroupWrap>

              <HomeFirstSectionGroupWrap>
                <div>
                  <BuildTeamThird />
                </div>
                <div style={{ marginLeft: "23px" }}>
                  <HomeFirstSectionGroupTitle>
                    Enhanced Productivity
                  </HomeFirstSectionGroupTitle>
                  <HomeFirstSectionGroupText>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </HomeFirstSectionGroupText>
                </div>
              </HomeFirstSectionGroupWrap>
            </HomeFirstSectionListWrap>
          </HomeFirstSectionWrapper>
        </SectionContainer>
      </HomeSection>
    </>
  );
};

export default HomeBuildTeamsSection;
