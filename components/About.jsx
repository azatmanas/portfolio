const About = () => {
  return (
    <section className="about" id="about">
      <div className="center">
        <h1 className="heading">
          About <span>Me</span>
        </h1>

        <div className="row-1">
          <div className="image">
            <img src="./images/azat.JPG" alt="Azat" />
          </div>

          <div className="content">
            <h3>My name is Azat & I am a Frontend Developer</h3>
            <p>
              Since beginning my journey, I have enjoyed learning new tech
              skills. I'm constantly pushing my limits and challenging myself to
              learn new things. I love the creative process and hammering out
              ideas to bring new and interesting things to life.
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span>Gender: </span> Male
                </p>
                <p>
                  <span>Born: </span> Kyrgyzstan
                </p>
                <p>
                  <span>Language: </span> Kyrgyz, Russian, English
                </p>
                <p>
                  <span>Education: </span> Finance and Credit
                </p>
                <p>
                  <span>Tech course: </span> ZTM Frontend Developer, TripleTen
                  Software Engineer
                </p>
              </div>

              <div className="box">
                <p>
                  <span>Remote, Relocation: </span> Available
                </p>
                <p>
                  <span>Hobby: </span> Football, Reading
                </p>
                <p>
                  <span>Phone: </span> +1 (224) 493-7062
                </p>
                <p>
                  <span>Email: </span> ztmanas@gmail.com
                </p>
              </div>
            </div>

            <a href="./images/SWE.pdf" className="btn">
              Download CV
            </a>
            <a href="#" className="btn">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
