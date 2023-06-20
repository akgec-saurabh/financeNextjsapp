import React from "react";
import styles from "./founder.module.css";
import Image from "next/image";

const data = [
  { name: "Manish Shara", desg: "Co-Founder & CEO", img: "Manish.png" },
  { name: "Yash Desai", desg: "Co-Founder", img: "Yash.png" },
  { name: "Lokesh Agarwal", desg: "CTO", img: "Lokesh.png" },
];

const Founder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.head}>Meet our Founders</p>
        <p className={styles.text}>Few words from founders desk</p>
      </div>
      <div className={styles.founders}>
        {data.map((i, k) => (
          <div className={styles.founder}>
            <div className={styles.imageContainer}>
              <Image src={`/${i.img}`} alt={i.name} fill />
            </div>
            <div className={styles.detail}>
              <div className={styles.data}>
                <p className={styles.name}>{i.name}</p>
                <p className={styles.desg}>{i.desg}</p>
              </div>
              <div className={styles.iconContainer}>
                <Image src="/LinkedIn.png" alt="" fill />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
