import React from "react";

const SOCIAL_LINKS = [
  {
    url: "https://www.instagram.com/azar_manasson/",
    iconClass: "fab fa-instagram",
    label: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/azat-manas-264b14bb/",
    iconClass: "fab fa-linkedin",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/",
    iconClass: "fab fa-github",
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
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Logo/Brand */}
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
      <div className="social-links">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className={`${link.iconClass} mx-2 hover:text-blue-400`}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{link.label}</span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
