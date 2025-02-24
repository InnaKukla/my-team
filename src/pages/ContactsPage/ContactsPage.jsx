// import React from "react";
// import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
// import { ContactsWrap } from "../../components/Contacts/Contacts.styled";
// import Contacts from "../../components/Contacts/Contacts";

// const ContactsPage = () => {

//   return (
//     <>
//       <ContactsWrap >
//         <Header />
//         <Contacts/>
//       </ContactsWrap>
//       <Footer />
//     </>
//   );
// };

// export default ContactsPage;

import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContactsWrap } from "../../components/Contacts/Contacts.styled";
import Contacts from "../../components/Contacts/Contacts";
import Loader from "../../shared/Loader/Loader";

const ContactsPage = () => {
  const [loaded, setLoaded] = useState(false);
  // eslint-disable-next-line no-template-curly-in-string
  const maneImg = "contacts-desktop.jpg";
  useEffect(() => {
    const img = new Image();
    img.src = maneImg;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Loader />}
      <ContactsWrap style={{ opacity: loaded ? 1 : 0 }}>
        <Header />
        <Contacts />
      </ContactsWrap>
      <Footer />
    </>
  );
};

export default ContactsPage;
