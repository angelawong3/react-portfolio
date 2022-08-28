import React, { useState } from "react";
import validator from "validator";

const Contact = () => {
  const [Error, setError] = useState("");

  const requiredField = (e) => {
    let name = e.target.value;
    let email = e.target.value;
    let message = e.target.value;

    if (!name) {
      setError("This is a required field.");
    }

    if (validator.isEmail(email)) {
      setError("");
    } else {
      setError("Please enter a valid Email");
    }

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
            onChange={(e) => requiredField(e)}
          />
        </label>
        <label className="label">
          Email:&nbsp;
          <input
            className="input-email"
            type="text"
            name="email"
            onChange={(e) => requiredField(e)}
          />
        </label>

        <label className="label">
          Message:&nbsp;
          <textarea
            className="input-message"
            type="text"
            name="message"
            onChange={(e) => requiredField(e)}
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
