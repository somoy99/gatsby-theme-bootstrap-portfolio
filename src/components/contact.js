import React from "react";
import { Button } from "react-bootstrap";
import ContactMe from "../../assets/contact_me.svg";
import "../styles/contact.css";
const contact = () => {
  return (
    <div id="contact" className="text-center">
      <h3>I can help.</h3>
      <h5>I'm currently available for freelance work.</h5>
      <ContactMe id="contact_me_svg" />
      <br />
      <form action="mailto:k.somoykhan@gamil.com" method="GET">
        <Button type="submit">Knock me!</Button>
      </form>

      <h5 style={{ marginTop: "25px" }}>
        If you have a project that you want to get started, think you need my
        help with something <br /> or just fancy saying hey, then get in touch.
      </h5>

    </div>
  );
};

export default contact;
