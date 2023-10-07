import { useRef, useState } from "react";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const [disabled, setDisabled] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      await fetch(
        `${process.env.REACT_APP_NETLIFY_DOMAIN}/.netlify/functions/email`,
        {
          method: "POST",
          body: JSON.stringify({
            name: form.current.elements["name"].value,
            email: form.current.elements["email"].value,
            message: form.current.elements["message"].value,
          }),
        }
      );
    } catch (error) {
      console.log("ERROR SENDING EMAIL");
    } finally {
      setDisabled(false);
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bharathegde619@gmail.com</h5>
            <a href="mailto:bharathegde619@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerFill className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>bharat.hegde.750</h5>
            <a href="https://m.me/bharat.hegde.750">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <fieldset disabled={disabled}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />

            <button
              disabled={disabled}
              type="submit"
              className="btn btn-primary"
            >
              {disabled ? "Sending...." : "Send Message"}
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;
