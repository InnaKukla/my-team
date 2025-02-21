import React from "react";
import { AboutWrap } from "../../components/About/About.styled";
import Header from "../../components/Header/Header";

// import Hero from "../../components/Hero/Hero";
import AboutHero from "../../components/About/AboutHero";
import AboutDirectorsSection from "../../components/About/AboutDirectorsSection";
import AboutClients from "../../components/About/AboutClients";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <AboutWrap>
        <Header />
        <AboutHero/>
      </AboutWrap>
      <AboutDirectorsSection/>
      <AboutClients/>
      <PreFooter/>
      <Footer/>
    </>
  );
};

export default AboutPage;
