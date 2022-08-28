import React, { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [Error, setError] = useState("");

  const validEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setError("");
    } else {
      setError("Please enter a valid Email");
    }
  };

  const requiredName = (e) => {
    let name = e.target.value;

    if (!name) {
      setError("This is a required field.");
    }
  };

  const requiredMessage = (e) => {
    let message = e.target.value;

    if (!message) {
      setError("This is a required field.");
    }
  };

  return (
    <section id="section">
      <div id="title">CONTACT ME</div>
      <form>
        <label className="label">
          Name:&nbsp;
          <input
            className="input-name"
            type="text"
            name="name"
            onChange={(e) => requiredName(e)}
          />
        </label>
        <label className="label">
          Email:&nbsp;
          <input
            className="input-email"
            type="text"
            name="email"
            onChange={(e) => validEmail(e)}
          />
        </label>

        <label className="label">
          Message:&nbsp;
          <textarea
            className="input-message"
            type="text"
            name="message"
            onChange={(e) => requiredMessage(e)}
          ></textarea>
        </label>
        <span
          style={{
            fontWeight: "bold",
            color: "red",
            margin: "10px",
          }}
        >
          {Error}
        </span>

        <input className="btn-form" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
