"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.imgContainer}>
        <Image fill={true} src="/logo.svg" alt="logo" className={styles.img} />
      </Link>

      <div className={styles.dummy}></div>
      <div onClick={menuHandler} className={styles.menu}>
        <Image
          fill={true}
          src={`/${menuOpen ? "close" : "menu"}.svg`}
          alt="menu"
        />
      </div>
      <div
        onClick={() => {
          setMenuOpen(false);
        }}
        className={`${styles.links} ${menuOpen ? styles.show : styles.hide}`}
      >
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          About Us
        </Link>
        <Link className={styles.link} href="/partner-with-us">
          Parntner With Us
        </Link>
        <Link className={styles.link} href="/blog">
          Blog
        </Link>
        <Link
          className={`${styles.link} ${styles.btn}`}
          href="https://play.google.com/store/apps/details?id=in.onecode.app"
        >
          Download ZET
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
