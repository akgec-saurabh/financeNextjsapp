import React from "react";
import styles from "./page.module.css";
import Navbar from "@/compnents/Navbar/Navbar";
import Founder from "@/compnents/Founder/Founder";
import Footer from "@/compnents/Footer/Footer";
import Image from "next/image";
import Investor from "@/compnents/Investor/Investor";
import Abouthero from "@/compnents/Abouthero/Abouthero";
import Evolve from "@/compnents/Evolve/Evolve";

const About = () => {
  return (
    <div className={styles.container}>
      <Abouthero />
      <Evolve />
      <Investor />
      <Founder />
      <div className={styles.imageContainer}>
        <Image src="/aboutusfooter.png" fill alt="" />
      </div>
    </div>
  );
};

export default About;
