import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="center">
        <h1 className="heading">
          contact <span> me </span>
        </h1>

        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-envelope"></i>
            <h3>my email</h3>
            <p>ztmanas@gmail.com</p>
          </div>

          <div className="icons">
            <i className="fas fa-phone"></i>
            <h3>my number</h3>
            <p>+12244937062</p>
          </div>

          <div className="icons">
            <i className="fas fa-map-marker-alt"></i>
            <h3>my address</h3>
            <p>United States</p>
          </div>
        </div>

        <div className="row">
          <form id="form" action="">
            <input
              id="name"
              type="text"
              placeholder="name"
              className="box"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="email"
              className="box"
              required
            />
            <input
              id="number"
              type="number"
              placeholder="number"
              className="box"
            />
            <textarea
              placeholder="message"
              id="myTextarea"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" id="btnSend" className="btn">
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
