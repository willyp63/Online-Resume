import React from "react";
import { Splash, NavBar, Footer } from "../shared";
import {
  useFormControl,
  emptyValidator,
  emailValidator,
  validateBeforeSubmit
} from "../utils";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [name, nameError, updateName] = useFormControl("", [emptyValidator()]);
  const [email, emailError, updateEmail] = useFormControl("", [
    emptyValidator(),
    emailValidator()
  ]);
  const [subject, subjectError, updateSubject] = useFormControl("", [
    emptyValidator()
  ]);
  const [message, messageError, updateMessage] = useFormControl("", [
    emptyValidator()
  ]);

  const onSubmit = e => {
    if (
      !validateBeforeSubmit([
        updateName,
        updateEmail,
        updateSubject,
        updateMessage
      ])
    ) {
      e.preventDefault();
      document
        .getElementById("contact-form")
        .scrollIntoView({ behavior: "smooth" });
    } else {
      // TODO
      window.location.reload();
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <main id="content">
        <Splash
          titleLines={["Something On", "Your Mind?"]}
          imgUrl="/imgs/contact-me-bg.jpg"
          imgAlt="pen and paper"
        />
        <div className="outer-grid py-32 flex flex-col items-center">
          <h2 className="w-full lg:w-2/3 text-4xl md:text-5xl text-center mb-4">
            Feel free to contact me about anything
          </h2>
          <p className="w-full lg:w-2/3 text-lg md:text-xl text-center text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <a className="btn mt-16" href="mailto:wpirino1@gmail.com">
            <FaEnvelope className="mr-2" />
            EMAIL ME DIRECT
          </a>
          <div className="my-4 mt-6 text-xl flex items-center">
            <div className="border-b-2 w-6 border-gray-700"></div>
            <div className="mx-2 italic text-gray-700">OR</div>
            <div className="border-b-2 w-6 border-gray-700"></div>
          </div>
          <div className="text-xl md:text-2xl">Fill out the form below</div>
        </div>
        <div
          className="outer-grid py-16 bg-light-gray flex flex-col items-center"
          id="contact-form"
        >
          <form className="w-full lg:w-2/3" onSubmit={onSubmit}>
            <div className="flex mb-2 flex-col md:flex-row">
              <div className="mb-2 md:mb-0 md:mr-8 md:w-1/2">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={e => updateName(e.target.value)}
                  onBlur={() => updateName(null, true)}
                  className={"text-input" + (nameError ? " error" : "")}
                  placeholder="Ricky Bobby"
                />
                <div className="text-red-500 pt-1" style={{ minHeight: 28 }}>
                  {nameError}
                </div>
              </div>
              <div className="md:w-1/2">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => updateEmail(e.target.value)}
                  onBlur={() => updateEmail(null, true)}
                  className={"text-input" + (emailError ? " error" : "")}
                  placeholder="dragonslayer71@hotmail.net"
                />
                <div className="text-red-500 pt-1" style={{ minHeight: 28 }}>
                  {emailError}
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="subject" className="input-label">
                Subject
              </label>
              <input
                id="subject"
                value={subject}
                onChange={e => updateSubject(e.target.value)}
                onBlur={() => updateSubject(null, true)}
                className={"text-input" + (subjectError ? " error" : "")}
                placeholder="Cats"
              />
              <div className="text-red-500 pt-1" style={{ minHeight: 28 }}>
                {subjectError}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="input-label">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={e => updateMessage(e.target.value)}
                onBlur={() => updateMessage(null, true)}
                className={"text-input" + (messageError ? " error" : "")}
                rows="12"
                placeholder="Your cats are so cute!!"
              />
              <div className="text-red-500 pt-1" style={{ minHeight: 28 }}>
                {messageError}
              </div>
            </div>
            <button className="btn" type="submit">
              <FaPaperPlane className="mr-2" />
              SEND
            </button>
          </form>
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Contact;
