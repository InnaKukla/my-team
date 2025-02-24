import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import * as toasty from "../../shared/toastify/toastify";
import emailjs from "@emailjs/browser";

import {
  ContactsFormBox,
  ContactsFormButton,
  ContactsFormInput,
} from "./Contacts.styled";

const ContactsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
  });

  const [fieldValidity, setFieldValidity] = useState({
    name: null,
    email: null,
    companyName: null,
    title: null,
    message: null,
  });
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Валідація
    if (name === "name") {
      setFieldValidity((prev) => ({
        ...prev,
        name: value.trim().length >= 2,
      }));
    } else if (name === "email") {
      setFieldValidity((prev) => ({
        ...prev,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      toasty.toastError("Please enter the correct name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      toasty.toastError("Please enter the correct email.");

      return;
    }

    emailjs
      .send(
        "service_4la9nvx",
        "template_jg48mhl",
        formData,
        "ASj2T2eVyeLmURhxt"
      )
      .then(
        () => {
          toasty.toastSuccess("Your mail has been sent!");
          return;
        },
        () => {
          toasty.toastError("Sending error!");
        }
      );
    setIsEmailTouched(false);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("my-form-contact").reset();
    setFormData({
      name: "",
      email: "",
      companyName: "",
      title: "",
      message: "",
    });

    setFieldValidity({
      name: null,
      email: null,
      companyName: null,
      title: null,
      message: null,
    });
  };

  return (
    <ContactsFormBox
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      id="my-form-contact"
    >
      <ContactsFormInput
        id="filled-name-input"
        label="Name"
        name="name"
        variant="standard"
        color="white"
        fullWidth
        required
        value={formData.name}
        onChange={handleChange}
        $isvalid={fieldValidity.name}
      />
      <ContactsFormInput
        required
        id="filled-email-input"
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
        variant="standard"
        fullWidth
        color="white"
        error={isEmailTouched && formData.email.trim() === ""}
        helperText={
          isEmailTouched && formData.email.trim() === ""
            ? "This field is required"
            : ""
        }
        $isvalid={fieldValidity.email}
        value={formData.email}
        onChange={handleChange}
        onBlur={() => setIsEmailTouched(true)}
      />
      <ContactsFormInput
        id="filled-company-name-input"
        label="Company Name"
        name="companyName"
        variant="standard"
        color="white"
        fullWidth
        value={formData.companyName}
        $isvalid={fieldValidity.companyName}
        onChange={handleChange}
      />
      <ContactsFormInput
        id="filled-title-input"
        label="Title"
        name="title"
        variant="standard"
        color="white"
        fullWidth
        $isvalid={fieldValidity.title}
        value={formData.title}
        onChange={handleChange}
      />
      <ContactsFormInput
        id="filled-message-input"
        label="Message"
        name="message"
        variant="standard"
        color="white"
        fullWidth
        className="inputMessage"
        $isvalid={fieldValidity.message}
        value={formData.message}
        rows={3}
        multiline
        onChange={handleChange}
      />
      <ContactsFormButton className="buttonSubmit" type="submit">
        submit
      </ContactsFormButton>
      <ToastContainer />
    </ContactsFormBox>
  );
};

export default ContactsForm;
