"use client";
import React, { useEffect } from "react";
import styles from "./swip.module.css";
import Image from "next/image";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.baseContainer}>
        <div className={styles.imageContainer}>
          <Image src="/peeps.png" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.head}>THE ZET EFFECT</div>
          <div className={styles.descContainer}>
            <Swiper
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{
                type: "progressbar",
              }}
            >
              <SwiperSlide>
                <div className={styles.text}>
                  <p>
                    More than ₹20 Cr earned by our Agents by selling Credit
                    Cards and Loans
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.text}>
                  <p>
                    14 Lakh+ Financial Advisor across India are using ZET to
                    increase their income.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.text}>
                  <p>
                    We helped customers in more than 50 cities to get their
                    first financial product
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swip;
