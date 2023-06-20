import React from "react";
import styles from "./evolve.module.css";
import Image from "next/image";
const Evolve = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>How we evolved over the years</p>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image src="/Growth.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Evolve;
