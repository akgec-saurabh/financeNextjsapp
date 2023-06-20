import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.containers}>
      <Image
        className={styles.fbackimg}
        src="/footer.jpg"
        alt="Background image"
        fill={true}
      />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.footer__logoContainer}>
            <Image
              className={styles.footer__logo}
              src="/footerlogo.svg"
              fill={true}
              alt=""
            />
          </div>
        </div>
        <div className={styles.itemContainer}>
          <div className={`${styles.item} ${styles.company}`}>
            <ul>
              <li className={styles.heading}>COMPANY</li>
              <li>About Us</li>
              <li>Parnter with us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={`${styles.item} ${styles.legal}`}>
            <ul>
              <li className={styles.heading}>LEGAL</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className={`${styles.item} ${styles.contact}`}>
            <ul>
              <li className={styles.heading}>CONTACT</li>
              <li>
                <div className={styles.iconContainer}>
                  <Image src="/EmailIcon.png" fill={true} alt="" />
                </div>
                <div>hi@zetapp.in</div>
              </li>
              <li>
                <div className={styles.iconContainer}>
                  <Image fill={true} src="/PhoneIcon.png" alt="" />
                </div>
                <div>+91-7417274072</div>
              </li>
            </ul>
          </div>
          <div className={`${styles.item} ${styles.social}`}>
            <ul>
              <li className={styles.heading}>SOCIAL</li>
              <li>
                <div className={styles.imgContainer}>
                  <Image
                    src="/linkedin.svg"
                    className={styles.img}
                    fill={true}
                    alt=""
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src="/insta.svg"
                    className={styles.img}
                    fill={true}
                    alt=""
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src="/facebook.svg"
                    className={styles.img}
                    fill={true}
                    alt=""
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src="/telegram.svg"
                    className={styles.img}
                    fill={true}
                    alt=""
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src="/whatsapp.svg"
                    className={styles.img}
                    fill={true}
                    alt=""
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
