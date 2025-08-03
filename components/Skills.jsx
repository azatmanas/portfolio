import React from "react";
import HTML5 from "../src/assets/HTML5.png";
import CSS from "../src/assets/css.png";
import JS from "../src/assets/js.png";
import REACT from "../src/assets/react.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="center">
        <h1 className="heading">
          <span> my </span> skills
        </h1>
        <div className="box-container">
          <div className="box">
            <img src={HTML5} alt="HTML5" />
          </div>
          <div className="box">
            <img src={CSS} alt="CSS" />
          </div>
          <div className="box">
            <img src={JS} alt="JavaScript" />
          </div>
          <div className="box">
            <img src={REACT} alt="React" />
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
