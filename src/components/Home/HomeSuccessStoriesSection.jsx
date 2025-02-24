import React from "react";
import {
  SectionContainer,
  HomeSuccessStoriesDecorIcon,
  HomeSuccessStoriesSectionName,
  HomeSuccessStoriesSectionPosition,
  HomeSuccessStoriesSectionText,
  HomeSuccessStoriesSectionTitle,
  HomeSuccessStoriesSectionWrap,
  HomeSuccessStoriesSectionList,
} from "./Home.styled";
import ImgFirst from "../../assets/avatarFirst.png";
import ImgSecond from "../../assets/avatar-2.png";
import ImgThird from "../../assets/avatar-3.png";

const HomeSuccessStoriesSection = () => {
  const successStoryPeople = [
    {
      description:
        " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
      name: "Kady Baker",
      position: "Product Manager at Bookmark",
      avatar: ImgFirst,
    },
    {
      description:
        "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
      name: "Aiysha Reese",
      position: "Founder of Manage",
      avatar: ImgSecond,
    },
    {
      description:
        "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
      name: "Arthur Clarke",
      position: "Co-founder of MyPhysio",
      avatar: ImgThird,
    },
  ];
  return (
    <>
      <HomeSuccessStoriesSectionWrap>
        <SectionContainer>
          <div>
            <HomeSuccessStoriesSectionTitle>
              Delivering real results for top companies. Some of our{" "}
              <span style={{ color: "#79C8C7" }}>success stories.</span>
            </HomeSuccessStoriesSectionTitle>
            <HomeSuccessStoriesSectionList>
              {successStoryPeople.map((item) => (
                <div
                  key={item.name}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <HomeSuccessStoriesDecorIcon />
                    <HomeSuccessStoriesSectionText>
                      {item.description}
                    </HomeSuccessStoriesSectionText>
                  </div>
                  <div>
                    <HomeSuccessStoriesSectionName>
                      {item.name}
                    </HomeSuccessStoriesSectionName>
                    <HomeSuccessStoriesSectionPosition>
                      {" "}
                      {item.position}
                    </HomeSuccessStoriesSectionPosition>
                  </div>
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
                </div>
              ))}
            </HomeSuccessStoriesSectionList>
          </div>
        </SectionContainer>
      </HomeSuccessStoriesSectionWrap>
    </>
  );
};

export default HomeSuccessStoriesSection;
