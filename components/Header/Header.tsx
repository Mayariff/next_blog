import React from "react";
import s from './Header.module.css'
import Link from "next/link";

const Header = () => {
  return (
    <header className={s.container}>
      <Link href={'/about'} className={s.link}>About</Link>
      <Link href={'/blog'} className={s.link}>Blog</Link>
      <Link href={'/'} className={s.link}>Home</Link>
    </header>
  );
};

export default Header;