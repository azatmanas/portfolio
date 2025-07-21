import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="center">
        <h1 className="heading">
          <span> my </span> skills
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="./images/HTML5.png" alt="HTML5" />
          </div>
          <div className="box">
            <img src="./images/css.png" alt="CSS" />
          </div>
          <div className="box">
            <img src="./images/js.png" alt="JavaScript" />
          </div>
          <div className="box">
            <img src="./images/react.png" alt="React" />
          </div>
          {/* <div className="box">
            <img src="./images/ts.png" alt="TypeScript" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
