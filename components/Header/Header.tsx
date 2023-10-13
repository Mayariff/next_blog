import React from "react";
import s from "./Header.module.css";
import Navigation from "@/components/Header/Navigation";


const navigateData = [
  {
  label: "About",
  link: "/about"
},
  {
    label: "Blog",
    link: "/blog"
  },
  {
    label: "Home",
    link: "/home"
  }];

const Header = () => {
  return (
    <header className={s.container}>
      <Navigation data={navigateData} />
    </header>
  );
};

export default Header;