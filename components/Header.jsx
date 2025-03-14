import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <a href="#" className="text-2xl font-bold">
        <span className="text-blue-400">azat</span> manas
      </a>

      <nav className="space-x-4">
        <a href="#home" className="hover:text-blue-400">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#skills" className="hover:text-blue-400">
          Skills
        </a>
        <a href="#experience" className="hover:text-blue-400">
          Experience
        </a>
        <a href="#portfolio" className="hover:text-blue-400">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </nav>

      <div className="space-x-3">
        <a
          href="https://www.facebook.com/azatmanasov10"
          className="fab fa-facebook-f"
        ></a>
        <a href="https://twitter.com/Azatmanas" className="fab fa-twitter"></a>
        <a
          href="https://www.instagram.com/azar_manasson/"
          className="fab fa-instagram"
        ></a>
        <a
          href="https://www.linkedin.com/in/azat-manas-264b14bb/"
          className="fab fa-linkedin"
        ></a>
        <a href="https://github.com/" className="fab fa-github"></a>
      </div>
    </header>
  );
};

export default Header;
