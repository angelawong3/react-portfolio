import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="section">
        <div id="title">CONTACT ME</div>
        {/* 
        contact form with fields for a name, an email address, and a message
        WHEN I move my cursor out of one of the form fields without entering text
        THEN I receive a notification that this field is required
        WHEN I enter text into the email address field
        THEN I receive a notification if I have entered an invalid email address
        */}
      </section>
    );
  }
}
