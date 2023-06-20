import React from "react";
import styles from "./abouthero.module.css";
import Image from "next/image";
const Abouthero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <Image src="/OurMission.png" alt="" fill />
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.head}>OUR MISSION</p>
        <p className={styles.desc}>
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p className={styles.tagline}>EARN BETTER. LIVE BETTER.</p>
      </div>
    </div>
  );
};

export default Abouthero;
