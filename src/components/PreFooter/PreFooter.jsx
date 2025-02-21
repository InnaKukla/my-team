import React from "react";
import { PreFooterButton, PreFooterSection, PreFooterContentWrapper, PreFooterTitle } from "./PreFooter.styled";
import { SectionContainer } from "../Home/Home.styled";
import { Link } from "react-router";

const PreFooter = () => {
  return (
    <PreFooterSection>
      <SectionContainer>
        <PreFooterContentWrapper >
          <PreFooterTitle>Ready to get started?</PreFooterTitle>
          <PreFooterButton><Link to="/contact">contact us</Link></PreFooterButton>
        </PreFooterContentWrapper>
      </SectionContainer>
    </PreFooterSection>
  );
};

export default PreFooter;
