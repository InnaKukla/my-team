import React, { useEffect, useState } from "react";
import {
  AboutClientsContentWrapper,
  AboutClientsMainText,
  AboutClientsWrapper,
} from "./About.styled";
import { SectionContainer } from "../Home/Home.styled";
import { ReactComponent as ClientsList } from "../../assets/clients.svg";
import { ReactComponent as ClientsListPhone } from "../../assets/clients-phone.svg";
import { ReactComponent as ClientsListTablet } from "../../assets/clients-tablet.svg";

const AboutClients = () => {
  const [isType, setIsType] = useState("phone");

  useEffect(() => {
    const sizeScreen = window.innerWidth;

    if (sizeScreen <= 767) {
      setIsType("phone");
    } else if (sizeScreen >= 1280) {
      setIsType("desktop");
    } else {
      setIsType("tablet");
    }
  }, []);
  return (
    <AboutClientsWrapper>
      <SectionContainer>
        <AboutClientsContentWrapper>
          <AboutClientsMainText>Some of our clients</AboutClientsMainText>
          {isType === "phone" && <ClientsListPhone />}
          {isType === "tablet" && (
            <ClientsListTablet style={{ width: "689px" }} />
          )}
          {isType === "desktop" && <ClientsList />}
        </AboutClientsContentWrapper>
      </SectionContainer>
    </AboutClientsWrapper>
  );
};

export default AboutClients;
