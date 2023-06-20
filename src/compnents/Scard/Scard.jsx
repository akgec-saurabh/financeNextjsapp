"use client";
import React, { useEffect, useState } from "react";
import styles from "./scard.module.css";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Scard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.head}>Top Brands on ZET</p>
        <p className={styles.desc}>
          We are trusted by best brand in the country
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        loop={true} // Add the loop prop
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/Amex.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/Aufin.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/Axis.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/Bajaj.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/Icici.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/BOB.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/idfc.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/IndusInd.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/YesBank.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src="/StandardChartered.png" alt="Amex" fill={true} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Scard;
