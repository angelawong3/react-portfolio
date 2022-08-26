import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="section">
        <div id="title">CONTACT ME</div>
        {/* TODO: notification for required field */}
        <form>
          <label className="label">
            Name:&nbsp;
            <input className="input-name" type="text" name="name" />
          </label>
          {/* TODO: validate email address */}
          <label className="label">
            Email:&nbsp;
            <input
              className="input-email"
              type="text"
              name="email"
              placeholder="Please enter a valid email address"
            />
          </label>
          <label className="label">
            Message:&nbsp;
            <textarea
              className="input-message"
              type="text"
              name="message"
            ></textarea>
          </label>
          <input className="btn-form" type="submit" value="Submit" />
        </form>
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
