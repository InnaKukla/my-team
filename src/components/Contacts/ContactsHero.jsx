import React from "react";
import {
    ContactsDescriptionItem,
  ContactsDescriptionList,
  ContactsDescriptionText,
  ContactsHeroSection,
  ContactsHeroWrapper,
  ContactsText,
  ContactsTitle,
} from "./Contacts.styled";

import { ReactComponent as ContactsManIcon } from "../../assets/manIcon.svg";
import { ReactComponent as ContactsSettingIcon } from "../../assets/settingIcon.svg";
import { ReactComponent as ContactsDiagramIcon } from "../../assets/diagramIcon.svg";
import { SectionContainer } from "../Home/Home.styled";
const ContactsHero = () => {
  return (
    
        <ContactsHeroWrapper>
            <ContactsTitle>Contact</ContactsTitle>
        <ContactsText>Ask us about</ContactsText>
        <ContactsDescriptionList>
          <ContactsDescriptionItem>
            <div>
              <ContactsManIcon />
            </div>
            <ContactsDescriptionText>
              The quality of our talent network
            </ContactsDescriptionText>
          </ContactsDescriptionItem>

          <ContactsDescriptionItem>
            {" "}
            <div>
              <ContactsSettingIcon />
            </div>
            <ContactsDescriptionText>
            Usage & implementation of our software
            </ContactsDescriptionText>
          </ContactsDescriptionItem>

          <ContactsDescriptionItem>
            {" "}
            <div>
              <ContactsDiagramIcon />
            </div>
            <ContactsDescriptionText>
            How we help drive innovation
            </ContactsDescriptionText>
          </ContactsDescriptionItem>
        </ContactsDescriptionList>
        </ContactsHeroWrapper>
  );
};

export default ContactsHero;
