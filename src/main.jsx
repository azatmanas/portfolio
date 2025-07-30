// const menu = document.querySelector("#menu-bars");
// const header = document.querySelector("header");

// menu.onclick = () => {
//   menu.classList.toggle("fa-times");
//   header.classList.toggle("active");
// };

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   header.classList.remove("active");
// };

// let cursor1 = document.querySelector(".cursor-1");

// const btnSend = document.getElementById("btnSend");
// const email = document.getElementById("email");
// const name = document.getElementById("name");
// const number = document.getElementById("number");
// const myTextarea = document.getElementById("myTextarea");

// btnSend.addEventListener("click", (e) => sendEmail(e));

// function sendEmail(e) {
//   if (email.value != "" && name.value != null) {
//     e.preventDefault();
//     window.open("mailto:ztmanas@gmail.com");

//     email.value = "";
//     name.value = "";
//     number.value = "";
//     myTextarea.value = "";
//   }
// }

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
