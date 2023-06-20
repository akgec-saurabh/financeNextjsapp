import Image from "next/image";
import React from "react";
import styles from "./Investor.module.css";

const dataFeature = [
  "feature1",
  "feature2",
  "feature3",
  "feature4",
  "feature5",
];

const dataCompany = [
  "InvCompany1",
  "InvCompany2",
  "InvCompany3",
  "InvCompany4",
];

const dataPerson = [
  { name: "Kunal Shah", desg: "Founder, CRED" },
  { name: "Gaurav Munjal", desg: "Founder, UNACADEMY" },
  { name: "Aakrit Vaish", desg: "Co-Founder, HAPTIK" },
  { name: "Harshil Mathur", desg: "Founder, RAZORPAY" },
  { name: "Vidit Aatrey", desg: "Founder & CEO, MEESHO" },
  { name: "Amrish Rau", desg: "CEO, PINELABS" },
  { name: "Lalit Keshre", desg: "CEO, GROWW" },
  { name: "Gokul Rajaram", desg: "Product, DOORDASH" },
];

const Investor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Got Featured</p>
      </div>
      <div className={styles.featureCompanyContainer}>
        {dataFeature.map((i, k) => (
          <div className={styles.featureCompany}>
            <div className={styles.featureCompanyImage}>
              <Image src={`/${i}.png`} alt={i} fill />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Meet the Investors</p>
      </div>
      <div className={styles.investorCompanyContainer}>
        {dataCompany.map((i, k) => (
          <div className={styles.investorCompany}>
            <div className={styles.investorCompanyImage}>
              <Image src={`/${i}.png`} alt={i} fill />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.investorPersonContainer}>
        {dataPerson.map((i, k) => (
          <div className={styles.investorContainer}>
            <div className={styles.investorPersonImage}>
              <Image src={`/Inv${k + 1}.png`} alt="" fill />
            </div>
            <div className={styles.name}>
              <p>{i.name}</p>
            </div>
            <div className={styles.desg}>
              <p>{i.desg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor;
