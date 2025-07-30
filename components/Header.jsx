import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const SOCIAL_LINKS = [
  {
    url: "https://www.instagram.com/azar_manasson/",
    icon: <FaInstagram />,
    label: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/azat-manas-264b14bb/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    url: "https://github.com/",
    icon: <FaGithub />,
    label: "GitHub",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const headerRef = useRef();
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      ref={headerRef}
      className={`${
        menuActive ? "active" : ""
      } flex justify-between items-center p-4 bg-gray-900 text-white`}
    >
      {/* Logo/Brand */}
      <div
        id="menu-bars"
        className={`fas fa-bars ${menuActive ? "fa-times" : ""}`}
        onClick={toggleMenu}
        ref={menuRef}
      ></div>
      <div className="logo">
        <a href="#" className="text-2xl font-bold">
          <span className="text-blue-400">azat</span> manas
        </a>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="hover:text-blue-400">
            {item.label}
          </a>
        ))}
      </nav>

      {/* Social Links */}
      <div className="follow">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
