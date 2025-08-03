import React from "react";
import WEATHER from "../src/assets/weather.png";
import SHOPPING from "../src/assets/shopping1.jpg";
import JOKE from "../src/assets/joke.png";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="center">
        <h1 className="heading">
          <span> my </span> portfolio
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={WEATHER} alt="weather" />
            <h3>Weather</h3>
            <div className="icons">
              <a
                href="https://github.com/azatmanas/se_project_react"
                className="fas fa-link"
              ></a>
              <a
                href="https://azatreactproject.netlify.app"
                className="fas fa-share"
              ></a>
              <a
                href="https://azatreactproject.netlify.app"
                className="fas fa-search"
              ></a>
            </div>
          </div>

          <div className="box">
            <img src={SHOPPING} alt="shopping" />
            <h3>Quick Shopping</h3>
            <div className="icons">
              <a
                href="https://github.com/azatmanas/se_project_aroundtheus"
                className="fas fa-link"
              ></a>
              <a
                href="https://shoppingazat.netlify.app/"
                className="fas fa-share"
              ></a>
              <a
                href="https://shoppingazat.netlify.app/"
                className="fas fa-search"
              ></a>
            </div>
          </div>

          <div className="box">
            <img src={JOKE} alt="Joke-Teller" />
            <h3>Joke-Teller</h3>
            <div className="icons">
              <a
                href="https://github.com/azatmanas/joke.teller"
                className="fas fa-link"
              ></a>
              <a
                href="https://azatjoketeller.netlify.app"
                className="fas fa-share"
              ></a>
              <a
                href="https://azatjoketeller.netlify.app"
                className="fas fa-search"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
