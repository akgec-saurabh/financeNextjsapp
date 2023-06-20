"use client";
import React from "react";
import styles from "./product.module.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Card from "../Card/Card";
const Product = ({ src, head, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.head}>Products on ZET</p>
        <p className={styles.desc}>
          We are trusted by best brand in the country
        </p>
        <div className={`${styles.imageContainer} ${styles.first}`}>
          <Image src="/product.svg" alt="" fill={true} />
        </div>
        <div className={`${styles.imageContainer} ${styles.second}`}>
          <Image src="/bproduct.svg" alt="" fill={true} />
        </div>
      </div>

      <div className={styles.cardContainer}>
        <Card
          src="/CC.png"
          head="CREDIT CARDS"
          text="100% Contactless Application Process with Instant Approval From Top Banks."
          number="firstc"
        />
        <Card
          src="/Loan.png"
          head="LOANS"
          text="100% online process. Instant offers. Affordable Rate of Interest on loans."
          number="secondc"
        />
        <Card
          src="/BNPL.png"
          head="BUY NOW PAY LATER"
          text="Short-term financing that allows consumers to make purchases and pay for them over time."
          number="thirdc"
        />
        <Card
        
          src="/AccountSave.png"
          head="SAVING ACCOUNTS"
          text="ZET offers range of savings account that suits your personal needs for the banking."
          number="fourthc"
        />
      </div>
    </div>
  );
};

export default Product;
