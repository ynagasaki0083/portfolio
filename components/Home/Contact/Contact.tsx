import React from "react";
import ContactForm from "./ContactForm";
// import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#e6e7e9]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Contact Form*/}
        <div>
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div>{/* <ContactInfo /> */}</div>
      </div>
    </div>
  );
};

export default Contact;
