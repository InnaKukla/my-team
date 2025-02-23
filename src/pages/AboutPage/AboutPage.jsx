import React, { useEffect, useState } from "react";
import { AboutWrap } from "../../components/About/About.styled";
import Header from "../../components/Header/Header";

// import Hero from "../../components/Hero/Hero";
import AboutHero from "../../components/About/AboutHero";
import AboutDirectorsSection from "../../components/About/AboutDirectorsSection";
import AboutClients from "../../components/About/AboutClients";
import PreFooter from "../../components/PreFooter/PreFooter";
import Footer from "../../components/Footer/Footer";
import Loader from "../../shared/Loader/Loader";


const AboutPage = () => {
  const [loaded, setLoaded] = useState(false);

  const images = [
    "bg-about-1.jpg", // Приклад фонового зображення для AboutHero
    "about-directors.jpg",  // Для AboutDirectorsSection
    "about-clients.jpg",    // Для AboutClients
    // Додайте інші зображення, якщо потрібно
  ];
  useEffect(() => {
    const loadImages = () => {
      return Promise.all(
        images.map(
          (img) =>
            new Promise((resolve) => {
              const image = new Image();
              image.src = img;
              image.onload = resolve;
            })
        )
      );
    };

    loadImages().then(() => {
      setLoaded(true);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    {!loaded && <Loader />}

      <AboutWrap style={{ opacity: loaded ? 1 : 0 , transition: 'opacity 0.5s ease-in-out'}}>
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
