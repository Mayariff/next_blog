import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.marker}>
      by <a href={"https://t.me/MayaRiff"} target={"_blank"} className={s.link}> @MayaRiff </a>
      </div>
    </footer>
  );
};

export default Footer;