import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="center">
        <h1 className="heading">
          <span> my </span> internships
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="content">
              <span>Tripleten Bootcamp USA 2024 - Present</span>
              <h3>Software Engineer</h3>
              <p>
                Provide a transformative learning experience, combining hands-on
                coding skills with real-world projects. Led by industry experts,
                these intensive programs empower learners to excel in the
                dynamic field of technology, ensuring a solid foundation for a
                successful career in software engineering, for accelerated and
                comprehensive training.
                <br />
                Tech Stack: HTML, CSS, JavaScript, React, MongoDB
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>Zero To Mastery Academy online bootcamp 2022 - 2023</span>
              <h3>Front-End Developer</h3>
              <p>
                Training programme, designed to teach many of the desired skills
                & attributes necessary to succeed in the hi-tech world.
                Autonomous learning alongside a structure to produce
                well-rounded front-end developers.
                <br />
                Tech Stack: HTML, CSS, JavaScript, ReactJS, NodeJS, TypeScript,
                Tailwind, Redux, Firebase.
                <a
                  href="https://academy.zerotomastery.io/courses/697434/certificate"
                  className="fas fa-share"
                ></a>
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <span>Zero To Mastery Academy online bootcamp 2022 - 2023</span>
              <h3>JavaScript Developer</h3>
              <p>
                To build a joke teller project, I first created the basic
                structure of the web page using HTML and styled it using CSS. I
                then used JavaScript to fetch jokes from an API and display them
                on the web page. I added interactivity to the project by
                allowing users to select joke categories and triggering the
                joke-fetching function. Finally, I tested the project thoroughly
                and optimized it for performance and user experience.
                <br />
                Tech Stack: HTML, CSS, JavaScript
                <a
                  href="https://academy.zerotomastery.io/courses/698487/certificate"
                  className="fas fa-share"
                ></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
