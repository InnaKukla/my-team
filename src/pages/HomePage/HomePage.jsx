import React, { useEffect, useState } from "react";
import { HomeWrap } from "../../components/Home/Home.styled";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HomeBuildTeamsSection from "../../components/Home/HomeBuildTeamsSection";
import HomeSuccessStoriesSection from "../../components/Home/HomeSuccessStoriesSection";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Loader from "../../shared/Loader/Loader";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    "/my-team/bg2-header.jpg",
    "/my-team/bg2-first-section.jpg",
    "/my-team/bg2-second-section.jpg",
  ];

  useEffect(() => {
    const loadImages = () => {
      return Promise.all(
        images.map(
          (img) =>
            new Promise((resolve) => {
              const image = new Image();
              image.src = img;
              image.onload = () => {
                resolve();
              };
            })
        )
      );
    };

    loadImages()
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [images]);

  return (
    <>
      {!loaded && <Loader />}
      <HomeWrap
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
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
