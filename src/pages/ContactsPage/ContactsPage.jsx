import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContactsWrap } from "../../components/Contacts/Contacts.styled";
import Contacts from "../../components/Contacts/Contacts";

const ContactsPage = () => {
  return (
    <>
      <ContactsWrap>
        <Header />
        <Contacts/>
      </ContactsWrap>
      <Footer />
    </>
  );
};

export default ContactsPage;
