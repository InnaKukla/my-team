import React from "react";
import { ContactsHeroSection, ContactsWrapper } from "./Contacts.styled";
import { SectionContainer } from "../Home/Home.styled";
import ContactsHero from "./ContactsHero";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <ContactsHeroSection>
      <SectionContainer>
        <ContactsWrapper>
          <ContactsHero />
          <ContactsForm />
        </ContactsWrapper>
      </SectionContainer>
    </ContactsHeroSection>
  );
};

export default Contacts;
