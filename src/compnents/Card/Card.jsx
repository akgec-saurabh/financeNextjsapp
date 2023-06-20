import React, { useEffect } from "react";

import Tilt from "react-parallax-tilt";
import styles from "./card.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ src, head, text, number }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="parallax-effect"
      perspective={500}
      scale={1.03}
      transitionSpeed={1500}
    >
      <div data-aos="fade-up" className={`${styles.card} ${styles[number]}`}>
        <div className={styles.cimageContainer}>
          <Image src={src} alt="" fill="true" />
        </div>
        <div class={styles.ctextContainer}>
          <p class={styles.chead}>{head}</p>
          <p class={styles.ctext}>{text}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
