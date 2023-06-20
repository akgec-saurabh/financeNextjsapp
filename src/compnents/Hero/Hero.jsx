"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.baseContainer}>
        <div className={styles.textContainer}>
          <h1>
            Become a Financial Advisor and <span>Earn Rs.1 Lakh/Month</span>
          </h1>
          <p>No investment required</p>
          <div className={styles.gimageContainer}>
            <div className={styles.google__imageContainer}>
              <Image
                className={styles.img}
                src="/googleplay.svg"
                alt="Google Play"
                fill={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.hero__imageContainer}>
            <Image
              className={styles.img}
              src="/HeroImgNew.webp"
              alt="Google Play"
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
