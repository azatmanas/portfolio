import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-800 text-white"
    >
      <h1 className="text-4xl sm:text-6xl font-bold">
        Hi, I'm <span className="text-blue-400">Azat Manas</span>
      </h1>
      <p className="text-lg sm:text-xl mt-4 max-w-2xl">
        A passionate <span className="text-blue-400">Front-End Developer</span>{" "}
        creating modern, responsive, and user-friendly web experiences.
      </p>
      <a
        href="#portfolio"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-lg transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;
