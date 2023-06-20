"use client";
import React from "react";
import styles from "./pro.module.css";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Pro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.head}>Start Earning in 3 Easy Steps</p>
        <p className={styles.text}>
          We have create the app the make your earning easy
        </p>
      </div>

      <Swiper
        // install Swiper modules

        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className={styles.stepContainer}>
            <div className={styles.stepContainerText}>
              <p className={styles.step}>STEP 1</p>
              <p className={styles.steptext}>
                Download the App and Sign up as a ZET agent
              </p>
              <div className={styles.animated}>
                <div className={styles.line}></div>
              </div>
              <Image src="/googleplay.svg" alt="" width={110} height={50} />
            </div>
            <div className={styles.videoContainer}>
              <video
                className="video"
                autoPlay
                loop
                style={{ width: "100%", height: "auto" }}
              >
                <source src="/step.mp4" />
              </video>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.stepContainer}>
            <div className={styles.stepContainerText}>
              <p className={styles.step}>STEP 2</p>
              <p className={styles.steptext}>
                Register your customers and Recommend financial products
              </p>
              <div className={styles.animated}>
                <div className={styles.line}></div>
              </div>
              <Image src="/googleplay.svg" alt="" width={110} height={50} />
            </div>
            <div className={styles.videoContainer}>
              <video
                className="video"
                autoPlay
                loop
                style={{ width: "100%", height: "auto" }}
              >
                <source src="/step.mp4" />
              </video>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.stepContainer}>
            <div className={styles.stepContainerText}>
              <p className={styles.step}>STEP 3</p>
              <p className={styles.steptext}>
                Start earning upto ₹ 1 Lakh every month
              </p>
              <div className={styles.animated}>
                <div className={styles.line}></div>
              </div>
              <Image src="/googleplay.svg" alt="" width={110} height={50} />
            </div>
            <div className={styles.videoContainer}>
              <video
                className="video"
                autoPlay
                loop
                style={{ width: "100%", height: "auto" }}
              >
                <source src="/step.mp4" />
              </video>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles.background}>
        <Image src="/back.svg" alt="" fill={true} />
      </div>
    </div>
  );
};

export default Pro;
