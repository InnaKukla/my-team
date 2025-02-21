import React from "react";
import {
  // HomeFirstSection,
  // HomeFirstSectionGroupText,
  // HomeFirstSectionGroupTitle,
  // HomeFirstSectionGroupWrap,
  // HomeFirstSectionTitle,
  // HomePageLine,
  HomeWrap,
} from "../../components/Home/Home.styled";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeBuildTeamsSection from "../../components/Home/HomeBuildTeamsSection";
import HomeSuccessStoriesSection from "../../components/Home/HomeSuccessStoriesSection";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HomeWrap>
        <Header />
        <Hero />
      </HomeWrap>
      <HomeBuildTeamsSection />
      <HomeSuccessStoriesSection />
      <PreFooter />
      <Footer />
    </>
  );
};

export default HomePage;
