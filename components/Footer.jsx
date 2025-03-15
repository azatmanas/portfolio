import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      Created by <span>Azat Manas</span> |{" "}
      <span>{new Date().getFullYear()}</span> All rights reserved!
    </footer>
  );
};

export default Footer;
