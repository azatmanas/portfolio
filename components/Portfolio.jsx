import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="center">
        <h1 className="heading">
          <span> my </span> portfolio
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="./images/weather.png" alt="weather" />
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
            <img src="./images/nationalparks.png" alt="parks" />
            <h3>Around the USA</h3>
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
            <img src="./images/joke.png" alt="Joke-Teller" />
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
