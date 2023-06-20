"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./feature.module.css";
import Image from "next/image";

const data = [
  {
    title: "Zero Investment",
    text: "Build your business without any investment",
  },
  {
    title: "Quick Payout",
    text: "Direct Payout in your bank account in short time",
  },
  {
    title: "Limitless Earnings",
    text: "Direct Payout in your bank account in short time",
  },
  {
    title: "Training & Upskilling",
    text: "Get trained by finance and sales experts",
  },
  {
    title: "Customer Support",
    text: "Access tools and content to build relationship",
  },
  {
    title: "Financial Products",
    text: "Trustworthy & high-rated products & categories",
  },
];
const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      <Image
        className={styles.web}
        width={243}
        height={641}
        src="/bgImg.png"
        alt="background"
      />

      <div className={styles.heroContainer}>
        <p className={styles.title}>
          Why &nbsp;
          <span>Choose Us</span>
        </p>
        <p className={styles.desc}>Why we are loved by our customers</p>
        <Image
          className={styles.himage}
          src="/whyUsHero.png"
          width={277}
          height={374}
          alt="hero iamge"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className={styles.featureContainer}
      >
        {["1", "2", "3", "4", "5", "6"].map((i, k) => (
          <div key={k} className={styles.feature}>
            <Image width={96} height={96} src={`/${i}.svg`} alt="" />
            <p className={styles.ftitle}>{data[k].title}</p>
            <p className={styles.ftext}>{data[k].text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
